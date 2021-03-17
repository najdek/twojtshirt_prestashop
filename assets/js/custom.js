/*
 * Custom code goes here.
 * A template should always ship with an empty custom.js
 */
function ttRequireProductSize() {
    if (!window.location.href.includes("rozmiar-")) {
        $(".tt-variants-rozmiar input[type=radio]").attr("checked", false);
        $(".product-add-to-cart button.add-to-cart").attr("disabled", true);
        $(".tt-popover-add-to-cart").popover({
          trigger: "hover"
        });
        $(".tt-popover-add-to-cart .tt-cover").show();

        $(".tt-variants-rozmiar input[type=radio]").on("click change", function(e) {
            $(".product-add-to-cart button.add-to-cart").attr("disabled", false);
            $(".tt-popover-add-to-cart").popover("disable");
            $(".tt-popover-add-to-cart .tt-cover").hide();
        });
    }
}
