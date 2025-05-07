import pytest
from playwright.sync_api import sync_playwright

LOGIN_URL = "http://localhost:3000/login"
TEST_EMAIL = "cipahag174@buides.com"  # Replace with real, working email
TEST_PASSWORD = "securepassword123"             # Replace with matching password

def test_login_flow():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        page = browser.new_page()
        page.goto(LOGIN_URL)

        page.fill('input[type="email"]', TEST_EMAIL)
        page.fill('input[type="password"]', TEST_PASSWORD)
        page.get_by_role("button", name="Login").click()

        page.wait_for_timeout(2000)

        assert page.url != LOGIN_URL or page.locator("text=Login Successful").is_visible()

        browser.close()
