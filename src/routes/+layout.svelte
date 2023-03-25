<script lang="ts">
  import "../app.css";
  import Menu from "svelte-material-icons/Menu.svelte";
  import Magnify from "svelte-material-icons/Magnify.svelte";
  import Footer from "$lib/Footer.svelte";
  import { slide } from 'svelte/transition';

  let showNavbar = false;
</script>

<div class="flex flex-col h-full">
  <div class="flex flex-row bg-accent text-gray-200 h-16 px-4 shadow-xl justify-between">
    <div class="flex flex-row cursor-pointer">
      <div class="my-4" on:click={() =>  showNavbar = !showNavbar}>
        <Menu size="100%" />
      </div>
      <div class="ml-3 text-3xl my-auto pb-1">
        Voron Knowledge Base
      </div>
    </div>
    <div class="my-auto">
      <div class="absolute py-[15px] pl-4">
        <Magnify size="1.3em" />
      </div>
      <input type="text" placeholder="Search" class="pl-12 input w-full max-w-2xl rounded-full" />
    </div>
  </div>

  <div class="flex flew-row h-full">
    {#if showNavbar}
      <div class="bg-slate-800"  transition:slide="{{duration: 100, axis: 'x'}}">
        Sidebar
      </div>
    {/if}
    <div class="w-full flex flex-col"> 
      <div class="grow pt-8 px-3">
        <slot />
      </div>
      
      <Footer />
    </div>
  </div>


</div>

<slot />