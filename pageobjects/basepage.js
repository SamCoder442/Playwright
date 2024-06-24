import { expect } from '@playwright/test'

class BasePage {
	constructor(page) {
		this.page = page
	}

    async open(hrmsUrl) {
		return await this.page.goto(hrmsUrl)
	}

    async verifyElementText(selector, text) {
		const textValue = await this.page.textContent(selector)
		return expect(textValue.trim()).toBe(text)
	}

	async verifyElementContainsText(selector, text) {
		const locatorText = await this.page.locator(selector)
		return await expect(locatorText).toContainText(text)
	}
}
export default BasePage