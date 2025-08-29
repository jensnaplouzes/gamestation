<template>
  <div class="flex flex-col justify-center items-center gap-6">
    <h2 class="text-5xl text-center font-bold">Contact Form</h2>
    <div class="flex items-center gap-4">
      <blockquote class="border-l-4 border-red-700 pl-4 text-2xl italic mb-4">
        If you've been bitten, exposed, or have any symptoms, don't stay silent.
        <br />Send us a message immediately. Your survival could depend on it.
      </blockquote>
    </div>
  </div>
  <br />
  <div class="max-w-3xl mx-auto p-8 bg-black/60 rounded-md">
    <p>
      Time is critical, and every second counts.<br />
      <br />
      Whether you need guidance, assistance, or simply someone to talk to, we're
      here to help you through it.<br />
      We understand the fear, the uncertainty, and the weight of what this might
      mean.<br />
      You're not alone.<br />
      We're ready to listen, to support, and to offer any resources we can.<br />
      <br />
      Even if you're unsure, even if it's just a scratch — reach out.<br />
      Your message could make all the difference.<br />
      We take every report seriously and handle each one with care, urgency, and
      confidentiality.<br />
      Don't wait in silence. Let us know what you're going through.<br />
      <br />
      <strong>Remember:</strong> staying quiet doesn't keep others safe —
      speaking up just might.<br />
      We're here, and we're listening.
    </p>
    <br />
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
        <br />
        <p>
          And don't forget.. when you're lost in the darkness, look for the
          light.🌟
        </p>

        <button type="submit" class="button-primary">Send</button>
      </form>
      <img
        src="/Bilder/clicker.boss.png"
        alt="Clicker Boss"
        class="sticker w-40 rounded-lg shadow-lg"
      />
    </div>
  </div>
</template>

<script setup></script>
