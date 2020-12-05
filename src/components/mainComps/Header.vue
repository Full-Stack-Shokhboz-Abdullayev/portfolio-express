
<script>
import 'simplebar/dist/simplebar.min.css';
export default {
components: [],
data() {
return {
darkOn: false,
}
},
computed: { 
text() {
    return this.darkOn ? "Light" : "Dark"
    },
methods: {
onSwitch() {
this.darkOn = !this.darkOn
}
}
},
}
</script>