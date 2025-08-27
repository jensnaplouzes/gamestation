<template>
  <div
    class="min-h-screen bg-[url('/Bilder/kontakte.webp')] bg-cover bg-center text-white flex items-center"
  >
    <main class="max-w-3xl mx-auto p-8 bg-black/60 rounded-md">
      <h2 class="text-3xl font-bold mb-4">Contact Form</h2>
      <p>
        Send us a message if you have any questions or would like to give us
        feedback!
      </p>
      <br></br>
      <br></br>
      <div class="flex flex-col md:flex-row md:items-start gap-6">
        <form class="flex-1 space-y-4">
          <label class="block mb-1" for="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            class="w-full p-2 rounded bg-gray-700 focus:ring-2 focus:ring-red-500"
          /><br />
          <label class="block mb-1" for="email">E-Mail:</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            class="w-full p-2 rounded bg-gray-700 focus:ring-2 focus:ring-red-500"
          /><br />
          <label class="block mb-1" for="nachricht">Message:</label>
          <textarea
            id="nachricht"
            name="nachricht"
            rows="5"
            required
            class="w-full p-2 rounded bg-gray-700 focus:ring-2 focus:ring-red-500"
          ></textarea>
          <br /><br />
          <button
            type="submit"
            class="button-primary"
          >
            Send
          </button>
        </form>
        <img
          src="/Bilder/clicker.boss.png"
          alt="Clicker Boss"
          class="sticker w-40 rounded-lg shadow-lg"
        />
      </div>
    </main>
  </div>
</template>

<script setup></script>
