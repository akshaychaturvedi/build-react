sap.ui.define(["sap/ui/core/UIComponent"], function (UIComponent) {
  "use strict";

  return UIComponent.extend("sampleclass.public.Component", {
    metadata: {
      manifest: "json",
    },
    init: function () {
      UIComponent.prototype.init.apply(this, arguments);
      // var reactAppUrl = "/bd03a16c-bb5e-41c4-bf70-da0b612201f8.sample.sampleapp-1.0.0/index.html";

      // // Navigate to the React app
      // window.location.href = reactAppUrl;
    },
  });
});
