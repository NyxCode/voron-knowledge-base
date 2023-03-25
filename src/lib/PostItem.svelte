<script lang="ts"> 
  import AlertCircleOutline from "svelte-material-icons/AlertCircleOutline.svelte";
  import Tag from "./Tag.svelte";

  export let first: boolean = false;
  export let last: boolean = false;

  export let title: string = "Extrudor motor is clicking";
  export let type: "issue" | "guide" = "issue";
  export let tags: Array<string> = ["extruder", "motor", "clicking", "skipping","extruder", "motor", "clicking", "skipping","extruder", "motor", "clicking", "skipping"];


</script>


<div class="bg-neutral flex flex-row px-3 py-2" class:rounded-t-3xl={first} class:rounded-b-3xl={last} >
  <div class="h-10 my-auto mr-3 text-red-400">
    <AlertCircleOutline size="100%" />
  </div>
  <div class="flex flex-col">
    <div class="text-xl font-semibold">
      {title}
    </div>
    <div>
      The extruder motor is clicking regularly while extruding
    </div>
    <div class="flex flex-row gap-2 mt-2 mb-1 flex-wrap">
      {#each tags as tag}
        <Tag  name={tag} />
      {/each}
    </div>
  </div>  
</div>