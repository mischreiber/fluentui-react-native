import IconV1PageObject from '../pages/IconV1PageObject';
import { Attribute, IMAGE_A11Y_ROLE } from '../../common/consts';
import { ICON_ACCESSIBILITY_LABEL } from '../../IconLegacy/consts';

// Before testing begins, allow up to 60 seconds for app to open
describe('IconV1 Testing Initialization', () => {
  it('Wait for app load', async () => {
    await IconV1PageObject.waitForInitialPageToDisplay();
    expect(await IconV1PageObject.isInitialPageDisplayed()).toBeTruthy(IconV1PageObject.ERRORMESSAGE_APPLOAD);
  });

  it('Click and navigate to IconV1 test page', async () => {
    await IconV1PageObject.navigateToPageAndLoadTests(true);
    expect(await IconV1PageObject.isPageLoaded()).toBeTruthy(IconV1PageObject.ERRORMESSAGE_PAGELOAD);

    await expect(await IconV1PageObject.didAssertPopup()).toBeFalsy(IconV1PageObject.ERRORMESSAGE_ASSERT); // Ensure no asserts popped up
  });
});

describe('IconV1 Accessibility Testing', () => {
  beforeEach(async () => {
    await IconV1PageObject.scrollToTestElement();
  });

  it('Set SVG Icon "accessibilityLabel" prop. Validate "accessibilityLabel" value propagates to "Name" element attribute.', async () => {
    await expect(
      await IconV1PageObject.compareAttribute(IconV1PageObject._primaryComponent, Attribute.AccessibilityLabel, ICON_ACCESSIBILITY_LABEL),
    ).toBeTruthy();

    await expect(await IconV1PageObject.didAssertPopup()).toBeFalsy(IconV1PageObject.ERRORMESSAGE_ASSERT);
  });

  it('Set Font Icon "accessibilityLabel" prop. Validate "accessibilityLabel" value propagates to "Name" element attribute.', async () => {
    await expect(
      await IconV1PageObject.compareAttribute(IconV1PageObject._secondaryComponent, Attribute.AccessibilityLabel, ICON_ACCESSIBILITY_LABEL),
    ).toBeTruthy();

    await expect(await IconV1PageObject.didAssertPopup()).toBeFalsy(IconV1PageObject.ERRORMESSAGE_ASSERT);
  });

  it('Validate IconV1\'s "accessibilityRole" defaults to "ControlType.Image".', async () => {
    await expect(
      await IconV1PageObject.compareAttribute(IconV1PageObject._primaryComponent, Attribute.AccessibilityRole, IMAGE_A11Y_ROLE),
    ).toBeTruthy();

    await expect(await IconV1PageObject.didAssertPopup()).toBeFalsy(IconV1PageObject.ERRORMESSAGE_ASSERT);
  });
});
