<script>
export default {
  data() {
    return {
      meters: 1000,
      miles: 1609.344,
      nauticalMiles: 1852
    };
  },
  methods: {
    meter2miles() {
      this.miles = (this.meters * 1.609344).toFixed(3);
      this.nauticalMiles = (this.meters * 1.852).toFixed(3);
    },
    mile2meter() {
      this.meters = (this.miles / 0.00062137).toFixed(3);
      this.nauticalMiles = (this.miles * 0.86898).toFixed(3);
    },
    nautMile2meter() {
      this.nauticalMiles = this.$refs.nauticalMiles.value;
      this.meters = (this.nauticalMiles / 0.0005399).toFixed(3);
      this.miles = (this.nauticalMiles * 1.15078).toFixed(3);
    }
  }
}
</script>

<template>
  <form>
    <div class="form-group row">
      <label for="meter" class="col-sm-4 col-form-label">Meters</label>
      <div class="col-4">
        <input
            type="number"
            class="form-control"
            placeholder="m"
            v-model.number="meters"
            @keyup="meter2miles"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="mile" class="col-4 col-form-label">Miles</label>
      <div class="col-4">
        <input
            type="number"
            class="form-control"
            placeholder="M"
            v-model.number="miles"
            @keyup="mile2meter"
        />
      </div>
    </div>
    <div class="form-group row">
      <label for="nauticalMile" class="col-4 col-form-label">Nautical mile</label>
      <div class="col-4">
        <input
            type="number"
            class="form-control"
            placeholder="nauticalM"
            v-bind:value="nauticalMiles"
            @keyup="nautMile2meter"
            ref="nauticalMiles"
        />
      </div>
    </div>
  </form>
</template>

