<script lang="ts">
  import "../app.css";
  import Menu from "svelte-material-icons/Menu.svelte";
  import Magnify from "svelte-material-icons/Magnify.svelte";
  import Footer from "$lib/Footer.svelte";
  import { slide } from 'svelte/transition';

  let showNavbar = false;
</script>

<div class="flex flex-col h-full">
  <div class="flex flex-row bg-red-600 text-gray-200 h-16 px-4 shadow-xl justify-between">
    <div class="flex flex-row cursor-pointer">
      <div class="my-3" on:click={() =>  showNavbar = !showNavbar}>
        <Menu size="100%" />
      </div>
      <div class="ml-3 text-3xl my-auto pb-1">
        Voron Knowledge
      </div>
    </div>
    <div class="my-auto">
      <div class="absolute py-[15px] pl-3">
        <Magnify size="1.4em" />
      </div>
      <input type="text" placeholder="Search" class="pl-10 input w-full max-w-2xl rounded-full" />
    </div>
  </div>

  <div class="flex flew-row  h-full">
    {#if showNavbar}
      <div class="bg-slate-800"  transition:slide="{{duration: 100, axis: 'x'}}">
        Sidebar
      </div>
    {/if}
    <div> 
      Content
    </div>
  </div>

  <Footer />
</div>

<slot />