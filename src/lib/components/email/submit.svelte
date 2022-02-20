<script>
	import { fade } from 'svelte/transition';
	import { emailValidator, requiredValidator } from '$lib/components/email/validator/validator.js';
	import { createFieldValidator } from '$lib/components/email/validator/validation.js';
	const [validity, validate] = createFieldValidator(requiredValidator(), emailValidator());
	let email = '';
	let messageVisible = false;
	let backVisible = false;
	let responseMessage = '';
	let messageClass = '';
	let subBtnText = '';
	import BackIcon from '$lib/img/layout/back.svelte';

	async function submitEmail() {
		try {
			const submit = await fetch('/email-submit.json', {
				method: 'POST',
				body: JSON.stringify({
					email
				})
			});
			const data = await submit.json();
			messageVisible = true;
			responseMessage = data.message;
			if (data.status === 200) {
				messageClass = '';
				backVisible = false;
			} else {
				messageClass = 'error';
				subBtnText = 'Try again';
				backVisible = true;
			}
		} catch (error) {
			messageClass = 'error';
			subBtnText = 'Try again';
			responseMessage = `Something went wrong. Please try again later. If the problem persists, please contact us (Error code: 500). Thank you.`;
			backVisible = true;
			messageVisible = true;
		} finally {
			if (!backVisible) {
				setTimeout(() => {
					messageVisible = false;
				}, 3000);
			}
		}
	}
	const hideMessage = () => {
		messageVisible = false;
	};
	let bluredWithInvalid = false;
	$: bluredInvalid = bluredWithInvalid == true && email.length > 0;
	$: showMessage = messageVisible == true;
	$: showBack = backVisible == true;
</script>

<div class="sub-wrapper">
	{#if showMessage}
		<div in:fade out:fade class="msg-box {messageClass}">
			<div class="msg">{responseMessage}</div>
			{#if showBack}
				<div class="input input-btn" on:click={hideMessage}>
					<span class="icon">
						<svelte:component this={BackIcon} width={16} height={16} />
					</span>
					<span class="text">
						{subBtnText}
					</span>
				</div>
			{/if}
		</div>
	{/if}
	<div class="sub-box">
		<div class="sub-msg p-large">Join our mailing list to hear from us!</div>
		<form
			class="sub-form"
			on:submit|preventDefault={submitEmail}
			action="https://landing.mailerlite.com/webforms/landing/t0d8c1"
			method="post"
		>
			<label for="email" class="label">
				<span class="sr-only">Your Email</span>
			</label>
			<input
				class="input input-text email"
				aria-label="email"
				type="email"
				name="email"
				autocomplete="email"
				placeholder="email@abc.com"
				required
				on:focus={() => {
					bluredWithInvalid = false;
				}}
				id={bluredInvalid == true && !$validity.valid ? 'invalid' : ''}
				bind:value={email}
				use:validate={email}
				on:blur={() => {
					bluredWithInvalid = !$validity.valid;
				}}
			/>
			<input disabled={!$validity.valid} type="submit" value="Subscribe" class="input input-btn" />
			<!-- <input type="submit" value="Subscribe" class="input input-btn" /> -->
		</form>
	</div>
</div>

<style>
	.sub-wrapper {
		--from-gap: 13px;
		--sub-wrapper-padding: 0 29px 1.5rem;
		padding: var(--sub-wrapper-padding);
		position: relative;
	}

	.sub-box {
		display: grid;
		grid-auto-flow: row;
		grid-template-columns: 1fr;
		row-gap: 2rem;
	}

	.msg-box {
		--left: 29px;
		--right: 29px;
		--bottom: 27px;
		--top: unset;
		--font-size: 16px;
		--row-gap: 1rem;
		--column-gap: 0;
		--rows: 1fr auto;
		--columns: 1fr;
		position: absolute;
		top: var(--top);
		left: var(--left);
		right: var(--right);
		bottom: var(--bottom);
		background: var(--bkg);
		font-size: var(--font-size);
		grid-template-rows: var(--rows);
		grid-template-columns: var(--columns);
		row-gap: var(--row-gap);
		display: grid;
		place-content: center;
		z-index: 2;
	}

	.msg-box .input-btn {
		display: grid;
		grid-auto-flow: column;
		column-gap: 1rem;
		justify-self: end;
	}

	form {
		display: grid;
		row-gap: var(--from-gap);
		grid-auto-flow: row;
		grid-auto-rows: auto;
		grid-template-columns: 1fr;
	}

	form label {
		grid-row: -1;
	}

	form .input-text {
		grid-row: 1;
		grid-column: 1;
	}

	form .input-btn {
		grid-row: 2;
		grid-column: 1;
	}

	@media (min-width: 960px) {
		.sub-wrapper {
			--sub-wrapper-padding: 70px 0 40px;
			grid-column: 1 / -1;
			grid-row: 1 / 2;
			border-bottom: 1px solid var(--footer-nav-border-color);
		}
		.msg-box {
			--left: 0;
			--right: 0;
			--bottom: 0;
			--top: 0;
			--font-size: 16px;
			--row-gap: 0;
			--column-gap: 1rem;
			--rows: 1fr;
			--columns: 1fr auto;
			align-items: center;
		}

		.sub-box {
			grid-auto-flow: column;
			grid-template-columns: 1fr auto;
			row-gap: 2rem;
		}

		form {
			row-gap: unset;
			grid-auto-flow: column;
			grid-auto-rows: unset;
			grid-auto-columns: auto;
			grid-template-columns: 1fr;
			column-gap: 2rem;
		}

		form label {
			grid-row: -1;
			grid-column: -1;
		}

		form .input-text {
			grid-row: 1;
			grid-column: 1;
		}

		form .input-btn {
			grid-row: 1;
			grid-column: 2;
		}
	}
</style>
