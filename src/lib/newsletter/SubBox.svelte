<!-- 


<script>
	import { emailValidator, requiredValidator } from './validators.js';
    import { createFieldValidator } from './validation.js';
    const [ validity, validate ] = createFieldValidator(requiredValidator(), emailValidator());
    let email = null;
    let bluredWithValue = false;
    let onblurInvalidClass = "";
	async function subscribe() {
		const res = await fetch(`/newsletter/subscribe`, {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: email})
        });
		const text = await res.text();
		if (res.ok) {
            return text;
		} else {
            throw new Error(text);
		}
	}
	let promise = subscribe();
	const subscribeClick = () => {
		promise = subscribe();
	}
    $: onblurInvalidClass = bluredWithValue ? "invalid" : "";
</script>
<section>
    <div>Join our mailing list to hear from us!</div>
    <input class="input"
      type="text"
      on:blur={() => {
        if (email.value) {
          bluredWithValue = true;
        }
      }}
      bind:value={email}
      placeholder="Your Email"
			class:field-danger={!$validity.valid}
			class:field-success={$validity.valid}
      use:validate={email}
    />
    {#if $validity.dirty && !$validity.valid}
        <span class="validation-hint {onblurInvalidClass}">
            INVALID - {$validity.message} {$validity.dirty}
        </span>
    {/if}
    <button disabled={!$validity.valid} on:click={subscribeClick}>Subscribe</button>

    {#await promise then text}
        <div class="sub-modal success">{text}</div>
    {:catch error}
        <div class="sub-modal error">{error.message}</div>
    {/await}

</section> -->