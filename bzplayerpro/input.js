(function () {
	tinymce.create('tinymce.plugins.bzlpayer', {
		init: function (ed, url) {
			ed.addButton('videojs', {
				title: 'Insert bzplayer',
				image: url + '/icon.png',
				onclick: function () {
					var width = jQuery(window).width(), H = jQuery(window).height(), W = (750 < width) ? 750 : width;
					W = W - 0;
					H = H - 200;
					tb_show('Add Video', '#TB_inline?inlineId=videoJSpopup&width=' + W + '&height=' + H);
					jQuery("#TB_window").animate({
						height: H + 50 + 'px'
					});
					return false;
				}
			});
		},
		createControl: function (n, cm) {
			return null;
		},
	});
	tinymce.PluginManager.add('videojs', tinymce.plugins.bzlpayer);

	jQuery(function () {
		// Autoplay checkbox
		var autoplay_default = jQuery('#videojs-autoplay-default').val();
		if (autoplay_default == 'on')
			autoplay_checked = ' checked';
		else
			autoplay_checked = '';
		// Muted
		var muted_default = jQuery('#videojs-muted-default').val();
		if (muted_default == 'on')
			muted_checked = ' checked';
		else
			muted_checked = '';
		// Preload	
		var preload_default = jQuery('#videojs-preload-default').val();
		if (preload_default == 'on')
			preload_checked = ' checked';
		else
			preload_checked = '';


		var form = jQuery('<div id="videoJSpopup">\
		<style>\
			@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap);#bz-block{font-family:Roboto,sans-serif}.bz-tab{display:inline-block}.bz-controls{display:block;border-top:1px solid #f2f2f2;padding-top:20px}.bz-controls .b-block{display:inline-block;width:auto}.bz-info{background-color:#e8f1ff;font-size:14px;font-weight:400;letter-spacing:.4px;color:#357bf7;border-radius:2px;padding:8px 16px;margin-bottom:20px;line-height:24px}.bz-info span{background:#357bf7;color:#fff;font-size:14px;font-weight:500;padding:4px 12px;border-radius:2px}#bz-block input[type=radio]{display:none}#bz-block section{display:none;padding-top:20px;margin-bottom:20px;border-top:1px solid #f2f2f2;border-bottom:1px solid #f2f2f2}#bz-block .bz-tab label{display:inline-block;margin:0 0 -1px;padding:15px 15px;font-size:14px;font-weight:500;text-align:center;letter-spacing:.5px;color:#6e7882}#bz-block .bz-tab label:hover{color:#789;cursor:pointer}#bz-block input:checked+.bz-tab label{color:#76a7ff;border-bottom:3px solid #76a7ff}#bz-block #tab1:checked~#content1,#tab2:checked~#content2,#tab3:checked~#content3,#tab4:checked~#content4,#tab5:checked~#content5,#tab6:checked~#content6,#tab7:checked~#content7,#tab8:checked~#content8{display:block}.b-divider{width:100%;display:block;position:relative}.b-block{width:100%;position:relative;display:inline-block}.bz-title{font-size:14px;font-weight:500;text-transform:capitalize;letter-spacing:.4px;margin-bottom:8px;color:#000}.bz-title label{display:block;line-height:44px;margin-right:30px}.bz-title span{margin-right:15px;height:44px;width:44px;line-height:44px;background:#e8f1ff;color:#357bf7;border-radius:12px;float:left}.bz-body{width:33%!important;display:inline-block;margin:0 0 20px 0!important;padding:0!important;min-height:44px}.bz-body input[type=text]{width:100%;border:1px solid #eee;border-radius:2px;box-shadow:none;height:44px;line-height:42px;color:#222;padding:0 16px;font-size:13px;font-weight:500;letter-spacing:.4px}.bz-body input[type=checkbox]:checked:before{color:#357bf7;margin:-3px 0 0 -5px}.bz-body input[type=checkbox]:focus{box-shadow:none;border-color:#76a7ff}.bz-body input[type=text]:focus{box-shadow:none;border-bottom:1px solid #76a7ff!important;border:1px solid #eee}.bz-body input[type=checkbox]{border:2px solid #76a7ffba;margin-top:13px!important;box-shadow:none;border-radius:50px;height:18px;width:18px}.bz-body.label{width:10%!important;text-align:center}.bz-title.inline{width:40%;float:left}#TB_window .submit .button-primary{height:40px;padding:0 14px;font-size:12px;font-family:roboto;font-weight:500;letter-spacing:.5px;text-shadow:none;background-color:#357bf7;border:none;box-shadow:0 0 4px #357bf78c}.cap{width:100%!important}#TB_overlay{background:#000;opacity:.7;position:fixed;top:0;right:0;bottom:0;left:0;z-index:100050}#TB_window{position:fixed;background-color:#fff;z-index:100050;visibility:hidden;text-align:left;top:50%;left:50%;-webkit-box-shadow:0 3px 6px rgba(0,0,0,.3);box-shadow:0 3px 6px rgba(0,0,0,.3)}#TB_window img#TB_Image{display:block;margin:15px 0 0 15px;border-right:1px solid #ccc;border-bottom:1px solid #ccc;border-top:1px solid #666;border-left:1px solid #666}#TB_caption{height:25px;padding:7px 30px 10px 25px;float:left}#TB_closeWindow{height:25px;padding:11px 25px 10px 0;float:right}#TB_closeWindowButton{position:absolute;left:auto;right:0;width:29px;height:29px;border:0;padding:0;background:0 0;cursor:pointer;outline:0;-webkit-transition:color .1s ease-in-out,background .1s ease-in-out;transition:color .1s ease-in-out,background .1s ease-in-out}#TB_ajaxWindowTitle{float:left;font-weight:600;line-height:29px;overflow:hidden;padding:0 29px 0 10px;text-overflow:ellipsis;white-space:nowrap;width:calc(100% - 39px)}#TB_title{background:#fcfcfc;border-bottom:1px solid #ddd;height:29px}#TB_ajaxContent{clear:both;padding:2px 15px 15px 15px;overflow:auto;text-align:left;line-height:1.4em}#TB_ajaxContent.TB_modal{padding:15px}#TB_ajaxContent p{padding:5px 0 5px 0}#TB_load{position:fixed;display:none;z-index:100050;top:50%;left:50%;background-color:#e8e8e8;border:1px solid #555;margin:-45px 0 0 -125px;padding:40px 15px 15px}#TB_HideSelect{z-index:99;position:fixed;top:0;left:0;background-color:#fff;border:none;opacity:0;height:100%;width:100%}#TB_iframeContent{clear:both;border:none}.tb-close-icon{display:block;color:#666;text-align:center;line-height:29px;width:29px;height:29px;position:absolute;top:0;right:0}.tb-close-icon:before{content:"\f158";font:normal 20px/29px dashicons;speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}#TB_closeWindowButton:focus .tb-close-icon,#TB_closeWindowButton:hover .tb-close-icon{color:#00a0d2}#TB_closeWindowButton:focus .tb-close-icon{-webkit-box-shadow:0 0 0 1px #5b9dd9,0 0 2px 1px rgba(30,140,190,.8);box-shadow:0 0 0 1px #5b9dd9,0 0 2px 1px rgba(30,140,190,.8)}#TB_window ::-webkit-scrollbar{width:10px}#TB_window ::-webkit-scrollbar-track{background:#ececec}#TB_window ::-webkit-scrollbar-thumb{background:#cecece}#TB_window ::-webkit-scrollbar-thumb:hover{background:#76a7ff}\
		</style>\
		<div id="bz-block" class="form-table">\
			  <input id="tab1" type="radio" name="tabs" checked>\
			  <div class="bz-tab"><label for="tab1">HLS/MPEG</label></div>\
			  <input id="tab2" type="radio" name="tabs">\
			  <div class="bz-tab"><label for="tab2">MP4</label></div>\
			  <input id="tab4" type="radio" name="tabs">\
			  <div class="bz-tab"><label for="tab4">MKV</label></div>\
			  <input id="tab5" type="radio" name="tabs">\
			  <div class="bz-tab"><label for="tab5">Social/Audio</label></div>\
			  <input id="tab6" type="radio" name="tabs">\
			  <div class="bz-tab"><label for="tab6">Captions</label></div>\
			  <input id="tab7" type="radio" name="tabs">\
			  <div class="bz-tab"><label for="tab7">ADS</label></div>\
			  <input id="tab8" type="radio" name="tabs">\
			  <div class="bz-tab"><label for="tab8">Info</label></div>\
			  <section id="content1">\
				<div class="bz-title">hls</div>\
				<div class="bz-body"><input type="text" placeholder="Main URL" name="videojs-hls" id="videojs-hls"></div>\
				<div class="bz-body label"><input type="text" placeholder="Label" name="videojs-hls_label" id="videojs-hls_label"></div>\
				<div class="bz-title">mpeg-dash</div>\
				<div class="bz-body"><input type="text" placeholder="Main URL" name="videojs-mpeg" id="videojs-mpeg"></div>\
				<div class="bz-body label"><input type="text" placeholder="Label" name="videojs-mpeg_label" id="videojs-mpeg_label"></div>\
				<div class="b-block">\
				<div class="bz-title inline"><label for="videojs-selector"><span class="dashicons dashicons-admin-generic"></span>HLS/MPEG Auto Quality</div>\
				<div class="bz-body"><input id="videojs-selector" name="videojs-selector" type="checkbox" /></div>\
			</div>\
			</section>\
			  <section id="content2">\
				<div class="bz-title">mp4</div>\
				<div class="bz-body"><input type="text" placeholder="Main URL" name="videojs-mp4" id="videojs-mp4"></div>\
				<div class="bz-body label"><input type="text" placeholder="Label" name="videojs-mp4_label" id="videojs-mp4_label"></div>\
				<div class="bz-body"><input type="text" placeholder="2 URL" name="videojs-mp4_2" id="videojs-mp4_2"></div>\
				<div class="bz-body label"><input type="text" placeholder="Label" name="videojs-mp4_2_label" id="videojs-mp4_2_label"></div>\
				<div class="bz-body"><input type="text" placeholder="3 URL" name="videojs-mp4_3" id="videojs-mp4_3"></div>\
				<div class="bz-body label"><input type="text" placeholder="Label" name="videojs-mp4_3_label" id="videojs-mp4_3_label"></div>\
				<div class="bz-body"><input type="text" placeholder="4 URL" name="videojs-mp4_4" id="videojs-mp4_4"></div>\
				<div class="bz-body label"><input type="text" placeholder="Label" name="videojs-mp4_4_label" id="videojs-mp4_4_label"></div>\
				<div class="bz-body"><input type="text" placeholder="5 URL" name="videojs-mp4_5" id="videojs-mp4_5"></div>\
				<div class="bz-body label"><input type="text" placeholder="Label" name="videojs-mp4_5_label" id="videojs-mp4_5_label"></div>\
				<div class="bz-body"><input type="text" placeholder="6 URL" name="videojs-mp4_6" id="videojs-mp4_6"></div>\
				<div class="bz-body label"><input type="text" placeholder="Label" name="videojs-mp4_6_label" id="videojs-mp4_6_label"></div>\
				<div class="b-block">\
					<div class="bz-title inline"><label for="videojs-thumbnails"><span class="dashicons dashicons-images-alt"></span>Auto Thumbnails</div>\
					<div class="bz-body"><input id="videojs-thumbnails" name="videojs-thumbnails" type="checkbox" /></div>\
				</div>\
				<div class="b-block">\
					<div class="bz-title inline"><label for="videojs-source_selector"><span class="dashicons dashicons-admin-generic"></span>Quality Button</div>\
					<div class="bz-body" style=" width: 20px !important;float:left; "><input id="videojs-source_selector" name="videojs-source_selector" type="checkbox" /></div>\
					<div style="padding: 0 10px; min-height: 44px; line-height: 44px; float: left;">When 2 or more URL.</div>\
				</div>\
			  </section>\
			  <section id="content4">\
					<div class="bz-title">mkv</div>\
					<div class="bz-body"><input type="text" placeholder="Main URL" name="videojs-mkv" id="videojs-mkv"></div>\
					<div class="bz-body label"><input type="text" placeholder="Label" name="videojs-mkv_label" id="videojs-mkv_label"></div>\
					<div class="bz-body"><input type="text" placeholder="2 URL" name="videojs-mkv_2" id="videojs-mkv_2"></div>\
					<div class="bz-body label"><input type="text" placeholder="Label" name="videojs-mkv_2_label" id="videojs-mkv_2_label"></div>\
					<div class="bz-body"><input type="text" placeholder="3 URL" name="videojs-mkv_3" id="videojs-mkv_3"></div>\
					<div class="bz-body label"><input type="text" placeholder="Label" name="videojs-mkv_3_label" id="videojs-mkv_3_label"></div>\
					<div class="bz-body"><input type="text" placeholder="4 URL" name="videojs-mkv_4" id="videojs-mkv_4"></div>\
					<div class="bz-body label"><input type="text" placeholder="Label" name="videojs-mkv_4_label" id="videojs-mkv_4_label"></div>\
					<div class="bz-body"><input type="text" placeholder="5 URL" name="videojs-mkv_5" id="videojs-mkv_5"></div>\
					<div class="bz-body label"><input type="text" placeholder="Label" name="videojs-mkv_5_label" id="videojs-mkv_5_label"></div>\
					<div class="bz-body"><input type="text" placeholder="6 URL" name="videojs-mkv_6" id="videojs-mkv_6"></div>\
					<div class="bz-body label"><input type="text" placeholder="Label" name="videojs-mkv_6_label" id="videojs-mkv_6_label"></div>\
					<div class="b-block">\
					<div class="bz-title inline"><label for="videojs-source_selector_mkv"><span class="dashicons dashicons-admin-generic"></span>Quality Button MKV</div>\
					<div class="bz-body"><input id="videojs-source_selector_mkv" name="videojs-source_selector_mkv" type="checkbox" /></div>\
				</div>\
			  </section>\
			  <section id="content5">\
				<div class="bz-title">Social Source</div>\
					<div class="bz-body"><input type="text" placeholder="Youtube Video URL" name="videojs-youtube" id="videojs-youtube"></div>\
					<div class="bz-body"><input type="text" placeholder="Google Drive Video URL" name="videojs-gdrive" id="videojs-gdrive"></div>\
				<div class="bz-title">Audio</div>\
					<div class="bz-body"><input type="text" placeholder="MP3 Audio URL" name="videojs-mp3" id="videojs-mp3"></div>\
					<div class="bz-body"><input type="text" placeholder="OGG Audio URL" name="videojs-ogg" id="videojs-ogg"></div>\
				<div class="bz-title">Webm</div>\
					<div class="bz-body"><input type="text" placeholder="WEBM Video URL" name="videojs-webm" id="videojs-webm"></div>\
			 </section>\
			  <section id="content6">\
				<div class="bz-title cap">Captions/Subtitles (WebVTT format supported)</div>\
					<div class="bz-body"><input type="text" placeholder="Main URL" name="videojs-cap" id="videojs-cap"></div>\
					<div class="bz-body label"><input type="text" placeholder="Label" name="videojs-cap_label" id="videojs-cap_label"></div>\
					<div class="bz-body"><input type="text" placeholder="2 URL" name="videojs-cap_2" id="videojs-cap_2"></div>\
					<div class="bz-body label"><input type="text" placeholder="Label" name="videojs-cap_2_label" id="videojs-cap_2_label"></div>\
					<div class="bz-body"><input type="text" placeholder="3 URL" name="videojs-cap_3" id="videojs-cap_3"></div>\
					<div class="bz-body label"><input type="text" placeholder="Label" name="videojs-cap_3_label" id="videojs-cap_3_label"></div>\
					<div class="bz-body"><input type="text" placeholder="4 URL" name="videojs-cap_4" id="videojs-cap_4"></div>\
					<div class="bz-body label"><input type="text" placeholder="Label" name="videojs-cap_4_label" id="videojs-cap_4_label"></div>\
					<div class="bz-body"><input type="text" placeholder="5 URL" name="videojs-cap_5" id="videojs-cap_5"></div>\
					<div class="bz-body label"><input type="text" placeholder="Label" name="videojs-cap_5_label" id="videojs-cap_5_label"></div>\
					<div class="bz-body"><input type="text" placeholder="6 URL" name="videojs-cap_6" id="videojs-cap_6"></div>\
					<div class="bz-body label"><input type="text" placeholder="Label" name="videojs-cap_6_label" id="videojs-cap_6_label"></div>\
			 </section>\
			  <section id="content7">\
				<div class="bz-title inline"><label for="videojs-sp_preroll"><span class="dashicons dashicons-controls-repeat"></span>Video preroll</div>\
				<div class="bz-body"><input id="videojs-sp_preroll" name="videojs-sp_preroll" type="checkbox" /></div>\
				<div class="b-divider"></div>\
				<div class="bz-body"><input type="text" placeholder="Source mp4 file" name="videojs-sp_presource" id="videojs-sp_presource"><br>\</div>\
				<div class="bz-body"><input type="text" placeholder="Target URL (website link)" name="videojs-sp_prehref" id="videojs-sp_prehref"><br>\</div>\
				<div class="bz-body"><input type="text" placeholder="Skip Time (in seconds)" name="videojs-sp_preskip" id="videojs-sp_preskip"><br>\</div>\
			 </section>\
			  <section id="content8">\
				<div class="b-block">\
					<div class="bz-info"><span>ID</span> - To insert 2 or more player at single page, use ID field for example (use text: player1, player2 etc... without spaces).</div>\
				</div>\
				<div class="b-block">\
					<div class="bz-info"><span>Autoplay</span> - For autoplay you need to mute video, otherwise you are not able to use autoplay on chrome browser (chrome autoplay policy changed)</div>\
				</div>\
				<div class="b-block">\
					<div class="bz-info"><span>Label</span> - You can insert quality text in this field (SD,HD, High, Ultra High or 240p, 360p, 480p, 720p etc...). if you have only one source, put it in the main URL field.</div>\
				</div>\
				<div class="b-block">\
					<div class="bz-info"><span>Hls/Mpeg Auto Quality</span> - Only for Hls/Mpeg streams, quality labels will be generated from stream bitrate automatically if it is possible.</div>\
				</div>\
				<div class="b-block">\
					<div class="bz-info"><span>Thumbnails</span> - Only for Mp4 videos, video thumbnails will be generated automatically, navigate on progress bar to see thumbnails.</div>\
				</div>\
				<div class="b-block">\
					<div class="bz-info"><span>Video Preroll</span> - Only for Mp4 videos, for enabling video preroll check feature and fill all its fields.</div>\
				</div>\
			 </section>\
			<div class="b-block">\
				<div class="bz-title inline"><label for="videojs-poster"><span class="dashicons dashicons-format-image"></span>Poster</div>\
				<div class="bz-body"><input type="text" placeholder="Poster Image URL" name="videojs-poster" id="videojs-poster"><br>\
				</div>\
			</div>\
			<div class="b-block">\
				<div class="bz-title inline"><label for="videojs-id"><span class="dashicons dashicons-editor-ul"></span>ID</div>\
				<div class="bz-body"><input type="text" placeholder="Player ID" name="videojs-id" id="videojs-id"><br>\
				</div>\
			</div>\
			<div class="b-block">\
				<div class="bz-title inline"><label for="videojs-width"><span class="dashicons dashicons-image-flip-horizontal"></span>Width</div>\
				<div class="bz-body"><input type="text" placeholder="Player Width" name="videojs-width" id="videojs-width"><br>\
				</div>\
			</div>\
			<div class="b-block">\
				<div class="bz-title inline"><label for="videojs-height"><span class="dashicons dashicons-image-flip-vertical"></span>Height</div>\
				<div class="bz-body"><input type="text" placeholder="Player Height" name="videojs-height" id="videojs-height"><br>\
				</div>\
			</div>\
			<div class="bz-controls">\
				<div class="b-block">\
					<div class="bz-title inline"><label for="videojs-autoplay"><span class="dashicons dashicons-controls-pause"></span>Autoplay</div>\
					<div class="bz-body"><input id="videojs-autoplay" name="videojs-autoplay" type="checkbox"'+ autoplay_checked + '/></div>\
				</div>\
				<div class="b-block">\
					<div class="bz-title inline"><label for="videojs-muted"><span class="dashicons dashicons-controls-volumeoff"></span>Muted</div>\
					<div class="bz-body"><input id="videojs-muted" name="videojs-muted" type="checkbox"'+ muted_checked + '/></div>\
				</div>\
				<div class="b-block">\
					<div class="bz-title inline"><label for="videojs-loop"><span class="dashicons dashicons-controls-repeat"></span>Loop</div>\
					<div class="bz-body"><input id="videojs-loop" name="videojs-loop" type="checkbox" /></div>\
				</div>\
				<div class="b-block">\
					<div class="bz-title inline"><label for="videojs-controls"><span class="dashicons dashicons-controls-play"></span>Controls</div>\
					<div class="bz-body"><input id="videojs-controls" name="videojs-controls" type="checkbox" checked /></div>\
				</div>\
			</div>\
		</div>\
		<p class="submit">\
				<input type="button" id="videojs-submit" class="button-primary" value="Insert Video" name="submit" />\
		</p>\
		</div>');
		var table = form.find('#bz-block');
		form.appendTo('body').hide();


		form.find('#videojs-submit').click(function () {

			var shortcode = '[bzplayer';

			//text options
			var options = {
				'hls': '',
				'hls_label': '',
				'mpeg': '',
				'mpeg_label': '',
				'mp4': '',
				'mp4_label': '',
				'mp4_2': '',
				'mp4_2_label': '',
				'mp4_3': '',
				'mp4_3_label': '',
				'mp4_4': '',
				'mp4_4_label': '',
				'mp4_5': '',
				'mp4_5_label': '',
				'mp4_6': '',
				'mp4_6_label': '',
				'mkv': '',
				'mkv_label': '',
				'mkv_2': '',
				'mkv_2_label': '',
				'mkv_3': '',
				'mkv_3_label': '',
				'mkv_4': '',
				'mkv_4_label': '',
				'mkv_5': '',
				'mkv_5_label': '',
				'mkv_6': '',
				'mkv_6_label': '',
				'cap': '',
				'cap_label': '',
				'cap_2': '',
				'cap_2_label': '',
				'cap_3': '',
				'cap_3_label': '',
				'cap_4': '',
				'cap_4_label': '',
				'cap_5': '',
				'cap_5_label': '',
				'cap_6': '',
				'cap_6_label': '',
				'youtube': '',
				'gdrive': '',
				'webm': '',
				'mp3': '',
				'ogg': '',
				'sp_preskip': '',
				'sp_prehref': '',
				'sp_presource': '',
				'poster': '',
				'width': '',
				'height': '',
				'id': ''
			};

			for (var index in options) {
				var value = table.find('#videojs-' + index).val();

				// attaches the attribute to the shortcode only if it's different from the default value
				if (value !== options[index])
					shortcode += ' ' + index + '="' + value + '"';
			}

			//checkbox options
			options = {
				'autoplay': autoplay_default,
				'muted': muted_default,
				'preload': preload_default,
				'loop': '',
				'thumbnails': '',
				'source_selector': '',
				'source_selector_mkv': '',
				'selector': '',
				'sp_preroll': '',
				'controls': 'on'
			};

			for (var index in options) {
				var value = table.find('#videojs-' + index).is(':checked');

				if (value == true)
					checked = 'on';
				else
					checked = '';

				// attaches the attribute to the shortcode only if it's different from the default value
				if (checked !== options[index])
					shortcode += ' ' + index + '="' + value + '"';
			}

			//close the shortcode
			shortcode += ']';

			// inserts the shortcode into the active editor
			tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);

			// closes Thickbox
			tb_remove();
		});
	});
})();
