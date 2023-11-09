<template>
  <div class="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4 mb-6">
    <h3 class="mb-4 text-xl font-bold">Request an Equipment</h3>
    <form action="#">
      <div class="grid grid-cols-6 gap-6">
        <div class="col-span-6 sm:col-span-3">
          <label
            for="first-name"
            class="block mb-2 text-sm font-medium text-gray-900"
            >First Name</label
          >
          <input
            type="text"
            name="first-name"
            id="first-name"
            class="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
            placeholder="Bonnie"
            required=""
          />
        </div>
        <div class="col-span-6 sm:col-span-3">
          <label
            for="last-name"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Last Name</label
          >
          <input
            type="text"
            name="last-name"
            id="last-name"
            class="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
            placeholder="Green"
            required=""
          />
        </div>

        <div class="col-span-6 sm:col-span-3">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Email</label
          >
          <input
            type="email"
            name="email"
            id="email"
            class="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
            placeholder="example@company.com"
            required=""
          />
        </div>
        <div class="col-span-6 sm:col-span-3">
          <label
            for="phone-number"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Phone Number</label
          >
          <input
            type="number"
            name="phone-number"
            id="phone-number"
            class="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
            placeholder="e.g. +(12)3456 789"
            required=""
          />
        </div>
        <div class="col-span-6 sm:col-span-3">
          <label
            for="date-requested"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Request Date</label
          >
          <input
            type="date"
            name="date-requested"
            id="date-requested"
            class="shadow-lg-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5"
            placeholder=""
            required
          />
        </div>

        <div class="col-span-6 sm:col-full">
          <button
            class="text-white bg-gradient-to-br from-pink-500 to-voilet-500 rounded-lg shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform font-medium text-sm px-5 py-2.5 text-center"
            type="submit"
          >
            Save all
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
