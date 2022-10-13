package com.rtl;

import com.facebook.react.ReactActivity;
import com.facebook.react.modules.i18nmanager.I18nUtil;
import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
   @Override
   protected void onCreate(Bundle savedInstanceState) {
    I18nUtil sharedI18nUtilInstance = I18nUtil.getInstance();
    sharedI18nUtilInstance.allowRTL(this, true);

    SplashScreen.show(this, R.style.SplashScreenTheme);
    super.onCreate(savedInstanceState);
   }

  @Override
  protected String getMainComponentName() {
    return "rtl";
  }
}
