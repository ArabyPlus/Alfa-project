<template>
  <div class="comment-form">
    <h5>Add Comment :</h5>
    <div class="form">
      <form action="">
        <div class="row">
          <div class="col-12">
            <div class="form-group">
              <textarea placeholder="Your Comment" v-model="comment"></textarea>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <input type="text" placeholder="Your Name" v-model="name">
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <input type="email" placeholder="Your Email" v-model="email">
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <button class="btn-curve btn-blc btn-lg" @click="onSubmit">
                <span>Submit</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const name = ref('');
const email = ref('');
const comment = ref('');
const errMessage = ref('');

function onSubmit(e) {
  e.preventDefault();

  const contactData = {
    name,
    email,
    comment
  }

  if (!validateForm(contactData)) return;

  console.log(contactData);

  errMessage.value = '';
}

function validateForm(contactData) {
  if (!contactData.name || !contactData.email || !contactData.message) {
    errMessage.value = 'Please fill in all fields';
    return false;
  }
  if (contactData.name.length < 5) {
    errMessage.value = 'Name must be at least 5 characters';
    return false;
  }
  if (contactData.comment.length < 10) {
    errMessage.value = 'Message must be at least 10 characters';
    return false;
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(contactData.email)) {
    errMessage.value = 'Email address is invalid';
    return false;
  }
  return true;
}
</script>
