<template>
  <div class="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4 mb-6">
    <div class="text-xl mb-4 col-span-12">
      <div class="border-b border-gray-300 pb-2">Equipment Request Form</div>
    </div>
    <ClientOnly>
      <Vueform>
        <div class="grid grid-cols-2 gap-6">
          <TextElement
            name="first_name"
            label="First Name"
            placeholder="First Name"
          />
          <TextElement
            name="last_name"
            label="Last Name"
            placeholder="Last Name"
          />
          <TextElement
            name="email"
            label="Email"
            placeholder="Email"
            rules="required|email|max:255"
            :debounce="300"
          />
          <TextElement
            name="phone"
            label="Phone"
            placeholder="Phone"
            rules="required"
          />
          <DateElement
            name="requestDate"
            label="Request Date"
            :hour24="true"
            :time="true"
          />
          <DateElement
            name="returnDate"
            label="Return Date"
            :hour24="true"
            :time="true"
          />
        </div>
      </Vueform>
    </ClientOnly>
  </div>
</template>
