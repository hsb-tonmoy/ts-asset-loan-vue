<template>
  <div class="flex justify-center w-full">
    <ClientOnly>
      <Vueform
        ref="form$"
        @submit.prevent="handleSubmit"
        :replace-classes="{
          FormElements: { container: { 'vf-row': 'grid grid-cols-6 gap-4' } },
        }"
        :display-errors="false"
      >
        <div class="col-span-6">
          <TagsElement
            name="categories"
            rules="required|max:3"
            description="Select the type of equipment"
            :search="true"
            :items="categories"
            :native="false"
            :messages="{ required: 'You have to choose at least one category' }"
          />
        </div>
        <div class="col-span-3">
          <TextElement name="first_name" placeholder="First Name" />
        </div>
        <div class="col-span-3">
          <TextElement name="last_name" placeholder="Last Name" />
        </div>
        <div class="col-span-3">
          <TextElement
            name="email"
            placeholder="Email"
            rules="required|email|nullable|max:255"
            :debounce="300"
          />
        </div>
        <div class="col-span-3">
          <TextElement name="phone" placeholder="Phone" rules="required" />
        </div>
        <div class="col-span-3">
          <DateElement
            name="requestDate"
            :hour24="true"
            :time="true"
            placeholder="Request Date"
            description="Date & time when you need it"
          />
        </div>
        <div class="col-span-3">
          <DateElement
            name="returnDate"
            :hour24="true"
            :time="true"
            placeholder="Return Date"
            description="Date & time when you can return it"
          />
        </div>
        <div class="col-span-6">
          <TextareaElement name="notes" placeholder="Add a note" />
        </div>
        <div class="col-span-6 flex justify-end items-center">
          <ButtonElement
            name="submit"
            :submits="true"
            button-class="inline-flex gap-1 items-center justify-center bg-[#0099D8] px-6 py-3 rounded-2 text-white text-sm shadow-soft-lg hover:shadow-none transition-all duration-200 ease-in-out"
            >Submit
            <Icon name="material-symbols:keyboard-double-arrow-right-rounded"
          /></ButtonElement>
        </div>
      </Vueform>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const categories = ["Laptop", "Desktop", "Printer", "Other"];

const form$ = ref(null);

const handleSubmit = () => {
  console.log(form$.value.data);
};
</script>
