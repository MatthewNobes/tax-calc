<script>
	let preTaxIncome = 0;
</script>

<h1 class="text-3xl font-bold">Tax Calculator</h1>

<input bind:value={preTaxIncome} placeholder="How much money do you make?" />

<button
	class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
	on:click={() => console.log('hello')}>Calculate Tax</button
>
