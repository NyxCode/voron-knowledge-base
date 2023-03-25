<script lang="ts">
  import PostItem from "./PostItem.svelte";
</script>

<div class="flex flex-col gap-2 xl:max-w-4xl md:max-w-3xl max-w-md mx-auto">
  <PostItem first={true} />
  <PostItem />
  <PostItem />
  <PostItem />
  <PostItem />
  <PostItem />
  <PostItem last={true} />
</div>