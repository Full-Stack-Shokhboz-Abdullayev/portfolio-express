<template>
  <footer class="footer text-center py-4">
        <small class="">
            Made by Shokhboz Abdullayev from <a href="">beliefy.io</a> team.
        </small> <br>
        <small class="copyright"><i class="fa fa-copyright"></i> Copyright {{currentYear}}</small>
    </footer>
</template>

<script>


export default {
    
    computed: {
      currentYear() {
            return new Date().getFullYear()
        },
    
  },
}
</script>