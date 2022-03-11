<div class="sub-wrapper">
	<div class="sub-box">
		<div class="sub-msg p-large">Join our mailing list to stay on top of latest promotions and offers</div>
        <div class="ml-form-embed sub-form"
        data-account="3699446:b2k9f5k0b8"
        data-form="5212676:c6u9w0">
        </div>
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

    .sub-msg {
        align-self: center;
    }
	@media (min-width: 960px) {
		.sub-wrapper {
			--sub-wrapper-padding: 70px 0 40px;
			grid-column: 1 / -1;
			grid-row: 1 / 2;
			border-bottom: 1px solid var(--footer-nav-border-color);
		}

		.sub-wrapper .sub-box {
			grid-auto-flow: column;
			grid-template-columns: 1fr auto;
			row-gap: 2rem;
		}
	}

	/* INPUT/BUTTON/Form Styles */
	:global(.sub-wrapper input) {
		font-family: var(--inter) !important;
		font-size: var(--input-font-size) !important;
		color: var(--input-color) !important;
		line-height: var(--input-line-height) !important;
		height: var(--input-height) !important;
		padding: var(--input-padding) !important;
		background: var(--input-bg) !important;
		border-width: var(--input-border-width) !important;
		border-color: var(--input-border-color) !important;
		border-style: var(--input-border-type) !important;
		border-radius: var(--input-border-radius) !important;
		transition-property: border-color, color, background-color !important;
		transition-duration: 0.25s !important;
		transition-timing-function: ease-in-out !important;
	}
	:global(* *.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow button[type="submit"].primary:not(:disabled):not([style])) {
		font-family: var(--inter) !important;
		font-size: var(--input-font-size) !important;
		color: var(--input-color) !important;
		line-height: var(--input-line-height) !important;
		height: var(--input-height) !important;
		padding: var(--input-padding) !important;
		background-color: var(--input-bg) !important;
		border-width: var(--input-border-width) !important;
		border-color: var(--input-border-color) !important;
		border-style: var(--input-border-type) !important;
		border-radius: var(--input-border-radius) !important;
		transition-property: border-color, color, background-color !important;
		transition-duration: 0.25s !important;
		transition-timing-function: ease-in-out !important;

		width: var(--input-btn-width) !important;
		font-weight: var(--input-btn-font-weight) !important;
		align-items: center !important;
		justify-content: center !important;
		display: inline-grid !important;
	}

	:global(.sub-wrapper .sub-form form button[type="submit"].primary) {
		font-family: var(--inter) !important;
		font-size: var(--input-font-size) !important;
		color: var(--input-color) !important;
		line-height: var(--input-line-height) !important;
		height: var(--input-height) !important;
		padding: var(--input-padding) !important;
		background-color: var(--input-bg) !important;
		border-width: var(--input-border-width) !important;
		border-color: var(--input-border-color) !important;
		border-style: var(--input-border-type) !important;
		border-radius: var(--input-border-radius) !important;
		transition-property: border-color, color, background-color !important;
		transition-duration: 0.25s !important;
		transition-timing-function: ease-in-out !important;

		width: var(--input-btn-width) !important;
		font-weight: var(--input-btn-font-weight) !important;
		align-items: center !important;
		justify-content: center !important;
		display: inline-grid !important;
	}

	:global(.sub-wrapper input[type="email"], .sub-wrapper input[type="text"]) {
		font-size: var(--input-text-font-size) !important;
		color: var(--input-text-color) !important;
		font-weight: var(--input-text-font-weight) !important;
		line-height: var(--input-text-line-height) !important;
		box-shadow: 0 0 0 0 var(--color-error) !important;
		transition: box-shadow 0.3s ease-in-out, background 0.3s ease-in-out !important;
	}
	:global(.sub-wrapper input[type="email"]:focus, .sub-wrapper input[type="text"]:focus) {
		background: var(--input-text-focus-bg) !important;
	}

	:global(.sub-wrapper input:disabled, .sub-wrapper button:disabled) {
		color: var(--input-disabled-color) !important;
		background: var(--input-disabled-bg) !important;
		border-color: var(--input-disabled-brdr-color) !important;
	}
	:global(.ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-button-horizontal) {
		display: grid;
		grid-auto-flow: column;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
	}
	:global(.ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-button-horizontal > button) {
		grid-column: 1/-1;
		grid-row: 1/-1;
	}

	@media (min-width: 960px) {
		:global(.sub-wrapper button:not(:disabled):hover) {
			cursor: pointer !important;
		}
	}

</style>
