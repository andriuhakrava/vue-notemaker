<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <form v-on:submit.prevent="addNote" class="form-addnote">
          <div class="form-group">
            <label for="notename">Name of your note</label>
            <input type="text" class="form-control" id="notename" v-model.trim="note.name" :class="{ 'is-invalid': $v.note.name.$error }" @blur="$v.note.name.$touch()" required />
            <div class="invalid-feedback" v-if="!$v.note.name.required">
              Name field is required
            </div>
          </div>
          <div class="form-group">
            <label for="notecontent">Content of your note</label>
            <textarea class="form-control" id="notecontent" v-model.trim="note.content" :class="{ 'is-invalid': $v.note.content.$error }" @blur="$v.note.content.$touch()" required>
            </textarea>
            <div class="invalid-feedback" v-if="!$v.note.name.required">
              Content field is required
            </div>
          </div>
          <div class="form-group">
            <label for="database">Choose your database</label>
            <select v-model="database" id="database">
              <option value="localstorage">localStorage</option>
              <option value="firebase">Firebase</option>
            </select>
          </div>
          <button class="btn btn-success" :disabled="$v.$invalid">Add note</button>
        </form>
      </div>
    </div>
    <div class="row">
      <div v-if="notesList && notesList.length !== 0">
        <div v-for="note in notesList" :key="note.id" class="notes-list">
          <Note :note="note" />
        </div>
      </div>
      <div v-else>
        There are no notes.
      </div>
    </div>
  </div>
</template>

<script>
import uuid from 'uuid';
import { required } from 'vuelidate/lib/validators';
import Note from './Note.vue';

export default {
  name: 'home',
  data() {
    return {
      note: {
        name: '',
        content: '',
      },
      database: '',
      // notesList: JSON.parse(localStorage.getItem('notesList')) || [],
    };
  },
  components: {
    Note,
  },
  validations: {
    note: {
      name: {
        required,
      },
      content: {
        required,
      },
    },
    database: {
      required,
    },
  },
  methods: {
    addNote() {
      const notenameInput = document.querySelector('#notename');
      const notecontentInput = document.querySelector('#notecontent');
      const { name, content } = this.note;
      const note = {
        id: uuid(),
        name,
        content,
        comments: [],
      };
      // const notes = [];

      if (this.database === 'localstorage') {
        // if (localStorage.getItem('notesList') === null) {
        //   this.notesList.push(note);
        //   localStorage.setItem('notesList', JSON.stringify(this.notesList));
        // } else {
        //   this.notesList.push(note);
        //   localStorage.setItem('notesList', JSON.stringify(this.notesList));
        // }
        // this.notesList.push(note);
        // localStorage.setItem('notesList', JSON.stringify(this.notesList));
        this.$store.dispatch('addNoteToLocalStorage', note);
      } else if (this.database === 'firebase') {
        console.log('Name: ', this.note.name, 'Content: ', this.note.content);
      }

      notenameInput.value = '';
      notecontentInput.value = '';
      this.note.name = '';
      this.note.content = '';
    },
    showError() {
      console.log('Error!');
    },
  },
  computed: {
    notesList() {
      return this.$store.state.notes;
    },
  },
};
</script>

<style>
.invalid-feedback {
  font-style: italic;
}

.notes-list {
  display: flex;
}
</style>
