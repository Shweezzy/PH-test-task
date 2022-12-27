<template>
  <div>
    <Shipping />
    <Header />

    <!-- page content -->
    <main>
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped>
main {
  padding-top: 195px;
}

@media screen and (max-width: 414px) {
  main {
    padding-top: 119px;
  }
}
</style>
