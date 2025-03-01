import ContextualMenuPageObject from '../pages/ContextualMenuPageObject.win';
import { PAGE_TIMEOUT, Keys } from '../../common/consts';

// Before testing begins, allow up to 60 seconds for app to open
describe('ContextualMenu Testing Initialization', () => {
  it('Wait for app load', async () => {
    await ContextualMenuPageObject.waitForInitialPageToDisplay();
    expect(await ContextualMenuPageObject.isInitialPageDisplayed()).toBeTruthy(ContextualMenuPageObject.ERRORMESSAGE_APPLOAD);
  });

  it('Click and navigate to ContextualMenu test page', async () => {
    await ContextualMenuPageObject.navigateToPageAndLoadTests(true);
    expect(await ContextualMenuPageObject.isPageLoaded()).toBeTruthy(ContextualMenuPageObject.ERRORMESSAGE_PAGELOAD);

    await expect(await ContextualMenuPageObject.didAssertPopup()).toBeFalsy(ContextualMenuPageObject.ERRORMESSAGE_ASSERT); // Ensure no asserts popped up
  });
});

describe('ContextualMenu Functional Tests', () => {
  /* Scrolls and waits for the ContextualMenu to be visible on the Test Page */
  beforeEach(async () => {
    await ContextualMenuPageObject.scrollToTestElement(await ContextualMenuPageObject._contextualMenu);

    await ContextualMenuPageObject.closeContextualMenu(); // Reset ContextualMenu state for next test
  });

  it('Click on ContextualMenu Button. Validate that the menu opens by checking if its items are displayed.', async () => {
    /* Click on the ContextualMenu */
    await ContextualMenuPageObject.click(ContextualMenuPageObject._contextualMenu);

    await expect(await ContextualMenuPageObject.waitForContextualMenuItemsToDisplay(PAGE_TIMEOUT)).toBeTruthy();

    await expect(await ContextualMenuPageObject.didAssertPopup()).toBeFalsy(ContextualMenuPageObject.ERRORMESSAGE_ASSERT); // Ensure no asserts popped up
  });

  it("Type 'SPACE' on ContextualMenu Button. Validate that the menu opens by checking if its items are displayed.", async () => {
    /* Type "space" on the ContextualMenu */
    await ContextualMenuPageObject.sendKeys(ContextualMenuPageObject._contextualMenu, [Keys.SPACE]);

    await expect(await ContextualMenuPageObject.waitForContextualMenuItemsToDisplay(PAGE_TIMEOUT)).toBeTruthy();

    await expect(await ContextualMenuPageObject.didAssertPopup()).toBeFalsy(ContextualMenuPageObject.ERRORMESSAGE_ASSERT); // Ensure no asserts popped up
  });

  it("Type 'ENTER' on ContextualMenu Button. Validate that the menu opens by checking if its items are displayed.", async () => {
    /* Type "enter" on the ContextualMenu */
    await ContextualMenuPageObject.sendKeys(ContextualMenuPageObject._contextualMenu, [Keys.ENTER]);

    await expect(await ContextualMenuPageObject.waitForContextualMenuItemsToDisplay(PAGE_TIMEOUT)).toBeTruthy();

    await expect(await ContextualMenuPageObject.didAssertPopup()).toBeFalsy(ContextualMenuPageObject.ERRORMESSAGE_ASSERT); // Ensure no asserts popped up
  });

  /* Runs after all tests. This ensures the ContextualMenu closes. If it stays open, the test driver won't be able to close the test app */
  afterAll(async () => {
    await ContextualMenuPageObject.closeContextualMenu(); // Reset ContextualMenu state for next test
  });
});
