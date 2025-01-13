package com.worldtravel.app;

import android.os.Bundle; // Add this import
import android.util.Log; // Add this import
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) { // Use the imported Bundle class
    super.onCreate(savedInstanceState);

    Log.d("AuthCallback", "MainActivity started");
    if (getIntent() != null && getIntent().getData() != null) {
      Log.d("AuthCallback", "Intent Data: " + getIntent().getData().toString());
    }
  }
}
