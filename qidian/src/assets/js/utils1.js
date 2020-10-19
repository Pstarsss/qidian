(function () {
				function resizeBaseFontSize() {
					var rootHtml = document.documentElement,
						deviceWidth = rootHtml.clientWidth;
					if (deviceWidth > 680) {
						deviceWidth = 680;
					}
					rootHtml.style.fontSize = deviceWidth /6.8+ "px";
				}
				resizeBaseFontSize();
				window.addEventListener("resize", resizeBaseFontSize, false);
				window.addEventListener("orientationchange", resizeBaseFontSize, false);
			})();
