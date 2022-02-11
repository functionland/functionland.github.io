<script>
    const currentYear = new Date().getFullYear();
    const startYear = "2022";
    let yearString = "";
    if (currentYear >= startYear) {
        yearString = startYear + " - " + currentYear;
    } else {
        yearString = startYear;
    }
</script>
<div>
    © <a sveltekit:prefetch href="/">Functionland</a>, Inc. {yearString}. We love our users!
</div>
<style>
</style>