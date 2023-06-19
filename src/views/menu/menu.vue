<template>
  <div class="d-flex align-items-center justify-content-between border-bottom py-1">
    <a href="#" type="button">New Customer<i class="fas fa-edit ms-2"></i></a>
    <div class="dropdown">
      <a
        class="dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        -
      </a>
      <ul class="dropdown-menu text-start">
        <li><button class="dropdown-item">Dine In</button></li>
        <li><button class="dropdown-item">Take Away</button></li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: "MenuComponents",
  };
</script>
