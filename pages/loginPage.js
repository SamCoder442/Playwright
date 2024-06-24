import BasePage from './basepage'
import { baseUrl } from '../config'
import fs from 'fs'
import {
	loginPage,
	email,
	password,
	submit,
    popup, loginScreen, userEmail, pswd, loginbtn} from '../pageobjects/loginpage'

class LoginPage extends BasePage {
	constructor(page) {
		super(page)
	}

	async openApp() {
		await super.open(baseUrl)
		return await super.waitForPageLoad()
	}

    async loginPage() {
		await this.isElementVisible(loginPage, testData.notVisibleText)
	}

    async emailField() {
		return await this.isElementVisible(email, testData.notVisibleText)
	}

	async passwordField() {
		return await this.isElementVisible(password, testData.notVisibleText)
	}

	async loginButtonIsEnabled() {
		return await this.isElementEnabled(	submit, testData.notEnabledText)
	}

    async toastMessage(){
        return await this.isElementVisible(popup)
    }


	async loginPage() {
		await this.isElementVisible(loginScreen, testData.notVisibleText)
	}

    async emailField() {
		return await this.isElementVisible(userEmail, testData.notVisibleText)
	}

	async passwordField() {
		return await this.isElementVisible(pswd, testData.notVisibleText)
	}

	async loginButtonIsEnabled() {
		return await this.isElementEnabled(	loginbtn, testData.notEnabledText)
	}

}