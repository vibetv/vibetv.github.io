<?php

function bzplayer_menu() {
	global $bzplayer_admin;
	$bzplayer_admin = add_menu_page('bzplayer Panel', 'bzplayer Panel', 'manage_options', 'bzplayer', 'bzplayer_settings', plugins_url('icon.png', __FILE__));
}
add_action('admin_menu', 'bzplayer_menu');

function bzplayer_settings() {
	if (!current_user_can('manage_options'))  {
		wp_die( __('You do not have sufficient permissions to access this page.') );
	}
	?>
	<div class="wrap" style=" margin: 30px; background: #fff; padding: 30px; border-radius: 10px; ">
	<img src="<?php echo ''. plugins_url( 'bzplayer.png' , __FILE__ ) .''; ?>"></img></br>
	<span>Note: if you are choosing feature for example - "Brand/logo" you must fill all its fields:Image URL, Click Target, otherwise you'll get some errors. </span>
	<form method="post" action="options.php">
	<?php
	settings_fields( 'videojs_options' );
	do_settings_sections( 'videojs-settings' );
	?>
	<p class="submit">
	<input type="submit" class="button-primary" value="<?php _e('Save Changes') ?>" />
	</p>
	</form>
	</div>
	<?php
	
}
add_action('admin_init', 'register_bzplayer_settings');

/* Settings */
function register_bzplayer_settings() {
	register_setting('videojs_options', 'videojs_options', 'bzplayer_options_validate');

	add_settings_section('videojs_options', 'PLAYER OPTIONS', 'bzplayer_output', 'videojs-settings');
	add_settings_field('videojs_brand_on', 'Brand/Logo', 'brand_on_output', 'videojs-settings', 'videojs_options');
	add_settings_field('videojs_brand', '- Image URL', 'brand_output', 'videojs-settings', 'videojs_options');
	add_settings_field('videojs_brandurl', '- Click Target', 'brandurl_output', 'videojs-settings', 'videojs_options');
	add_settings_field('videojs_download_btn', 'Download Button', 'download_btn_output', 'videojs-settings',  'videojs_options');
	add_settings_field('videojs_resume', 'Resume Playback', 'resume_output', 'videojs-settings', 'videojs_options');
	add_settings_field('videojs_volume', 'Remember volume', 'volume_output', 'videojs-settings', 'videojs_options');	
	add_settings_field('videojs_download', 'Disable Download', 'download_output', 'videojs-settings', 'videojs_options');	
	add_settings_field('videojs_pip', 'Picture in Picture', 'pip_output', 'videojs-settings', 'videojs_options');		
	add_settings_field('videojs_back', 'Backward Button', 'back_output', 'videojs-settings', 'videojs_options');
	add_settings_field('videojs_back_time', '- Backward time', 'back_time_output', 'videojs-settings', 'videojs_options');
	add_settings_field('videojs_forward', 'Forward Button', 'forward_output', 'videojs-settings', 'videojs_options');
	add_settings_field('videojs_forward_time', '- Forward time', 'forward_time_output', 'videojs-settings', 'videojs_options');	
	add_settings_field('videojs_share', 'Social Share', 'share_output', 'videojs-settings', 'videojs_options');
	add_settings_field('videojs_toggle', 'Theater mode', 'toggle_output', 'videojs-settings', 'videojs_options');
	add_settings_field('videojs_prate', 'Playback Rate', 'prate_output', 'videojs-settings', 'videojs_options');	
	add_settings_field('videojs_controls_ontop', 'Always Show Controlbar', 'controls_ontop_output', 'videojs-settings', 'videojs_options');	
	add_settings_field('videojs_age', 'Age Control', 'age_output', 'videojs-settings', 'videojs_options');
	add_settings_field('videojs_age_wl', '- Welcome Message', 'age_wl_output', 'videojs-settings', 'videojs_options');
	add_settings_field('videojs_age_er', '- Error Message', 'age_er_output', 'videojs-settings', 'videojs_options');
	add_settings_field('videojs_marker', 'Text Marker', 'marker_output', 'videojs-settings', 'videojs_options');
	add_settings_field('videojs_marker_tx1', '- Text', 'marker_tx1_output', 'videojs-settings', 'videojs_options');
	add_settings_field('videojs_marker_sec1', '- Time', 'marker_sec1_output', 'videojs-settings', 'videojs_options');
	add_settings_field('videojs_marker_time', '- Text Display Time (Seconds)', 'marker_time_output', 'videojs-settings', 'videojs_options');
	
	add_settings_section('videojs_ads', 'ADVERTISMENT', 'bzplayer_output', 'videojs-settings');
	add_settings_field('videojs_htmlads', 'Html Ads', 'htmlads_output', 'videojs-settings', 'videojs_ads');
	add_settings_field('videojs_htmlads_code', '- Html Ads code', 'htmlads_code_output', 'videojs-settings', 'videojs_ads');
	add_settings_field('videojs_imaon', 'Vast/Vmap Advertisment', 'imaon_output', 'videojs-settings', 'videojs_ads');	
	add_settings_field('videojs_vast', '- Tag', 'vast_output', 'videojs-settings', 'videojs_ads');
	add_settings_field('videojs_prerollon', 'Preroll Advertisment', 'prerollon_output', 'videojs-settings', 'videojs_ads');
	add_settings_field('videojs_preroll', '- Video URL', 'preroll_output', 'videojs-settings', 'videojs_ads');
	add_settings_field('videojs_preskip', '- Video Skip Time', 'preskip_output', 'videojs-settings', 'videojs_ads');
	add_settings_field('videojs_prehref', '- Video Click Target', 'prehref_output', 'videojs-settings', 'videojs_ads');
	
	add_settings_section('videojs_controls', 'PLAYER CONTROLS', 'bzplayer_output', 'videojs-settings');
	add_settings_field('videojs_responsive', 'Responsive Video Player', 'responsive_output', 'videojs-settings', 'videojs_controls');
	add_settings_field('videojs_fixed', 'Fixed Player (requirs responsive player)', 'fixed_output', 'videojs-settings', 'videojs_controls');
	add_settings_field('videojs_width', 'Player Width', 'width_output', 'videojs-settings', 'videojs_controls');
	add_settings_field('videojs_height', 'Player Height', 'height_output', 'videojs-settings', 'videojs_controls');
	add_settings_field('videojs_poster', 'Player Poster', 'poster_output', 'videojs-settings', 'videojs_controls');
	add_settings_field('videojs_autoplay', 'Autoplay', 'autoplay_output', 'videojs-settings', 'videojs_controls');
	add_settings_field('videojs_loop', 'Loop', 'loop_output', 'videojs-settings', 'videojs_controls');
	add_settings_field('videojs_muted', 'Muted', 'muted_output', 'videojs-settings', 'videojs_controls');		
	
	
	
	add_settings_section('videojs_themes', 'PLAYER THEMES', 'bzplayer_output', 'videojs-settings');
	add_settings_field('videojs_default', 'Theme Default', 'default_output', 'videojs-settings', 'videojs_themes');
	add_settings_field('videojs_classic', 'Theme Classic', 'classic_output', 'videojs-settings', 'videojs_themes');
	add_settings_field('videojs_line', 'Theme Line', 'line_output', 'videojs-settings', 'videojs_themes');
	add_settings_field('videojs_flix', 'Theme Flix', 'flix_output', 'videojs-settings', 'videojs_themes');
	add_settings_field('videojs_round', 'Theme Round', 'round_output', 'videojs-settings', 'videojs_themes');
	
	
	add_settings_section('videojs_theme', 'THEME BUILDER', 'bzplayer_output', 'videojs-settings');
	add_settings_field('videojs_c_1', 'Conrol Bar Color', 'c_1_output', 'videojs-settings', 'videojs_theme');
	add_settings_field('videojs_c_2', 'Icons', 'c_2_output', 'videojs-settings', 'videojs_theme');
	add_settings_field('videojs_c_3', 'Icons hover', 'c_3_output', 'videojs-settings', 'videojs_theme');
	
	add_settings_field('videojs_c_4', 'Big play button', 'c_4_output', 'videojs-settings', 'videojs_theme');
	add_settings_field('videojs_c_26', 'Big play hover', 'c_26_output', 'videojs-settings', 'videojs_theme');
	
	add_settings_field('videojs_c_5', 'Tooltip color', 'c_5_output', 'videojs-settings', 'videojs_theme');
	add_settings_field('videojs_c_6', 'Tooltip background', 'c_6_output', 'videojs-settings', 'videojs_theme');
	add_settings_field('videojs_c_7', 'Tooltip 2 color', 'c_7_output', 'videojs-settings', 'videojs_theme');
	add_settings_field('videojs_c_8', 'Tooltip 2 background', 'c_8_output', 'videojs-settings', 'videojs_theme');
	
	add_settings_field('videojs_c_9', 'Volume progress', 'c_9_output', 'videojs-settings', 'videojs_theme');
	add_settings_field('videojs_c_10', 'Volume background', 'c_10_output', 'videojs-settings', 'videojs_theme');
	add_settings_field('videojs_c_25', 'Volume circle', 'c_25_output', 'videojs-settings', 'videojs_theme');
	
	add_settings_field('videojs_c_11', 'Share background', 'c_11_output', 'videojs-settings', 'videojs_theme');
	add_settings_field('videojs_c_12', 'Share Icons', 'c_12_output', 'videojs-settings', 'videojs_theme');
	add_settings_field('videojs_c_13', 'Close button', 'c_13_output', 'videojs-settings', 'videojs_theme');
		
	add_settings_field('videojs_c_14', 'Progress', 'c_14_output', 'videojs-settings', 'videojs_theme');
	add_settings_field('videojs_c_15', 'Progress background', 'c_15_output', 'videojs-settings', 'videojs_theme');
	add_settings_field('videojs_c_16', 'Progress loading', 'c_16_output', 'videojs-settings', 'videojs_theme');
	add_settings_field('videojs_c_17', 'Progress circle', 'c_17_output', 'videojs-settings', 'videojs_theme');
	add_settings_field('videojs_c_18', 'Menu Tooltip', 'c_18_output', 'videojs-settings', 'videojs_theme');
	add_settings_field('videojs_c_19', 'Menu color', 'c_19_output', 'videojs-settings', 'videojs_theme');
	add_settings_field('videojs_c_20', 'Menu hover', 'c_20_output', 'videojs-settings', 'videojs_theme');
	add_settings_field('videojs_c_24', 'Menu hover color', 'c_24_output', 'videojs-settings', 'videojs_theme');
	
	add_settings_field('videojs_c_21', 'Current time', 'c_21_output', 'videojs-settings', 'videojs_theme');
	add_settings_field('videojs_c_22', 'Duration', 'c_22_output', 'videojs-settings', 'videojs_theme');
	add_settings_field('videojs_c_23', 'Divider', 'c_23_output', 'videojs-settings', 'videojs_theme');
	
	
	}

/* Inputs */
function bzplayer_options_validate($input) {
	$newinput['videojs_height'] = $input['videojs_height'];
	$newinput['videojs_width'] = $input['videojs_width'];
	$newinput['videojs_poster'] = $input['videojs_poster'];
	$newinput['videojs_brand'] = $input['videojs_brand'];
	$newinput['videojs_brandurl'] = $input['videojs_brandurl'];
	$newinput['videojs_preroll'] = $input['videojs_preroll'];
	$newinput['videojs_preskip'] = $input['videojs_preskip'];
	$newinput['videojs_prehref'] = $input['videojs_prehref'];	
	
	$newinput['videojs_c_1'] = $input['videojs_c_1'];
	$newinput['videojs_c_2'] = $input['videojs_c_2'];
	$newinput['videojs_c_3'] = $input['videojs_c_3'];
	$newinput['videojs_c_4'] = $input['videojs_c_4'];
	$newinput['videojs_c_5'] = $input['videojs_c_5'];
	$newinput['videojs_c_6'] = $input['videojs_c_6'];
	$newinput['videojs_c_7'] = $input['videojs_c_7'];
	$newinput['videojs_c_8'] = $input['videojs_c_8'];
	$newinput['videojs_c_9'] = $input['videojs_c_9'];
	$newinput['videojs_c_10'] = $input['videojs_c_10'];
	$newinput['videojs_c_11'] = $input['videojs_c_11'];
	$newinput['videojs_c_12'] = $input['videojs_c_12'];
	$newinput['videojs_c_13'] = $input['videojs_c_13'];
	$newinput['videojs_c_14'] = $input['videojs_c_14'];
	$newinput['videojs_c_15'] = $input['videojs_c_15'];
	$newinput['videojs_c_16'] = $input['videojs_c_16'];
	$newinput['videojs_c_17'] = $input['videojs_c_17'];
	$newinput['videojs_c_18'] = $input['videojs_c_18'];
	$newinput['videojs_c_19'] = $input['videojs_c_19'];
	$newinput['videojs_c_20'] = $input['videojs_c_20'];
	$newinput['videojs_c_21'] = $input['videojs_c_21'];
	$newinput['videojs_c_22'] = $input['videojs_c_22'];
	$newinput['videojs_c_23'] = $input['videojs_c_23'];
	$newinput['videojs_c_24'] = $input['videojs_c_24'];
	$newinput['videojs_c_25'] = $input['videojs_c_25'];
	$newinput['videojs_c_26'] = $input['videojs_c_26'];
	$newinput['videojs_htmlads'] = $input['videojs_htmlads'] ;
	$newinput['videojs_imaon'] = $input['videojs_imaon'] ;
	$newinput['videojs_download'] = $input['videojs_download'] ;
	$newinput['videojs_pip'] = $input['videojs_pip'] ;
	$newinput['videojs_resume'] = $input['videojs_resume'] ;
	$newinput['videojs_volume'] = $input['videojs_volume'] ;
	$newinput['videojs_download_btn'] = $input['videojs_download_btn'] ;

	
	$newinput['videojs_default'] = $input['videojs_default'];
	$newinput['videojs_line'] = $input['videojs_line'] ;
	$newinput['videojs_flix'] = $input['videojs_flix'] ;
	$newinput['videojs_round'] = $input['videojs_round'] ;
	$newinput['videojs_classic'] = $input['videojs_classic'] ;	
	
	$newinput['videojs_prate'] = $input['videojs_prate'] ;
	$newinput['videojs_controls_ontop'] = $input['videojs_controls_ontop'] ;
	$newinput['videojs_share'] = $input['videojs_share'] ;
	$newinput['videojs_toggle'] = $input['videojs_toggle'] ;
	$newinput['videojs_back'] = $input['videojs_back'] ;
	$newinput['videojs_forward'] = $input['videojs_forward'] ;
	$newinput['videojs_back_time'] = $input['videojs_back_time'];
	$newinput['videojs_forward_time'] = $input['videojs_forward_time'];
	$newinput['videojs_brand_on'] = $input['videojs_brand_on'] ;
	$newinput['videojs_prerollon'] = $input['videojs_prerollon'] ;
	$newinput['videojs_vast'] = $input['videojs_vast'] ;
	$newinput['videojs_age_wl'] = $input['videojs_age_wl'] ;
	$newinput['videojs_age_er'] = $input['videojs_age_er'] ;
	$newinput['videojs_fixed'] = $input['videojs_fixed'] ;
	$newinput['videojs_autoplay'] = $input['videojs_autoplay'] ;
	$newinput['videojs_loop'] = $input['videojs_loop'] ;
	$newinput['videojs_muted'] = $input['videojs_muted'] ;
	$newinput['videojs_age'] = $input['videojs_age'] ;
	$newinput['videojs_marker'] = $input['videojs_marker'] ;
	$newinput['videojs_marker_sec1'] = $input['videojs_marker_sec1'];
	$newinput['videojs_marker_tx1'] = $input['videojs_marker_tx1'];
	$newinput['videojs_marker_time'] = $input['videojs_marker_time'];
	$newinput['videojs_responsive'] = $input['videojs_responsive'] ;
	$newinput['videojs_htmlads_code'] = $input['videojs_htmlads_code'];

	return $newinput;
}

/* Outputs */
function bzplayer_output() {
}

function height_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_height' name='videojs_options[videojs_height]' size='40' type='text' value='{$options['videojs_height']}' />";
}

function width_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_width' name='videojs_options[videojs_width]' size='40' type='text' value='{$options['videojs_width']}' />";
}

function poster_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_poster' name='videojs_options[videojs_poster]' size='40' type='text' value='{$options['videojs_poster']}' />";
}


function htmlads_code_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_htmlads_code' name='videojs_options[videojs_htmlads_code]' placeholder='Adsense, Propellerads etc.. code here' size='40' type='text' value='{$options['videojs_htmlads_code']}' />";
}




function brand_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_brand' name='videojs_options[videojs_brand]' size='40' type='text' value='{$options['videojs_brand']}' />";					
}

function brandurl_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_brandurl' name='videojs_options[videojs_brandurl]' size='40' type='text' value='{$options['videojs_brandurl']}' />";
}

function preroll_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_preroll' name='videojs_options[videojs_preroll]' size='40' type='text' value='{$options['videojs_preroll']}' />";
}

function preskip_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_preskip' name='videojs_options[videojs_preskip]' size='40' type='text' value='{$options['videojs_preskip']}' />";
}

function prehref_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_prehref' name='videojs_options[videojs_prehref]' size='40' type='text' value='{$options['videojs_prehref']}' />";
}

function vast_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_vast' name='videojs_options[videojs_vast]' size='40' type='text' value='{$options['videojs_vast']}' />";
}

function back_time_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_back_time' name='videojs_options[videojs_back_time]' size='40' type='text' value='{$options['videojs_back_time']}' />";
}

function forward_time_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_forward_time' name='videojs_options[videojs_forward_time]' size='40' type='text' value='{$options['videojs_forward_time']}' />";
}

function age_wl_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_age_wl' name='videojs_options[videojs_age_wl]' size='40' type='text' value='{$options['videojs_age_wl']}' />";
}

function age_er_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_age_er' name='videojs_options[videojs_age_er]' size='40' type='text' value='{$options['videojs_age_er']}' />";
}

function autoplay_output() {
	$options = get_option('videojs_options');
	if (isset($options['videojs_autoplay'])) { return ; } else { $checked = ''; }
	echo "<input ".$checked." id='videojs_autoplay' name='videojs_options[videojs_autoplay]' type='checkbox' />";
}

function loop_output() {
	$options = get_option('videojs_options');
	if(isset($options['videojs_loop'])) { return $checked = ' checked="checked" '; } else { $checked = ''; }
	echo "<input ".$checked." id='videojs_loop' name='videojs_options[videojs_loop]' type='checkbox' />";
}

function muted_output() {
	$options = get_option('videojs_options');
	if(isset($options['videojs_muted'])) { $checked = ' checked="checked" '; } else { $checked = ''; }
	echo "<input ".$checked." id='videojs_muted' name='videojs_options[videojs_muted]' type='checkbox' />";
}

function age_output() {
	$options = get_option('videojs_options');
	if(isset($options['videojs_age'])) { $checked = ' checked="checked" '; } else { $checked = ''; }
	echo "<input ".$checked." id='videojs_age' name='videojs_options[videojs_age]' type='checkbox' />";
}

function marker_output() {
	$options = get_option('videojs_options');
	if(isset($options['videojs_marker'])) { $checked = ' checked="checked" '; } else { $checked = ''; }
	echo "<input ".$checked." id='videojs_marker' name='videojs_options[videojs_marker]' type='checkbox' />";
}


function marker_tx1_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_marker_tx1' name='videojs_options[videojs_marker_tx1]' size='40' type='text' value='{$options['videojs_marker_tx1']}' />";
}

function marker_sec1_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_marker_sec1' name='videojs_options[videojs_marker_sec1]' size='40' type='text' value='{$options['videojs_marker_sec1']}' />";
}

function marker_time_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_marker_time' name='videojs_options[videojs_marker_time]' size='40' type='text' value='{$options['videojs_marker_time']}' />";
}

function responsive_output() {
	$options = get_option('videojs_options');
	if(isset($options['videojs_responsive'])) { $checked = ' checked="checked" '; } else { $checked = ''; }
	echo "<input ".$checked." id='videojs_responsive' name='videojs_options[videojs_responsive]' type='checkbox' />";
}

function imaon_output() {
	$options = get_option('videojs_options');
	if(isset($options['videojs_imaon'])) { $checked = ' checked="checked" '; } else { $checked = ''; }
	echo "<input ".$checked." id='videojs_imaon' name='videojs_options[videojs_imaon]' type='checkbox' />";
}

function htmlads_output() {
	$options = get_option('videojs_options');
	if(isset($options['videojs_htmlads'])) { $checked = ' checked="checked" '; } else { $checked = ''; }
	echo "<input ".$checked." id='videojs_htmlads' name='videojs_options[videojs_htmlads]' type='checkbox' />";
}

function line_output() {
	$options = get_option('videojs_options');
	if(isset($options['videojs_line'])) { $checked = ' checked="checked" '; } else { $checked = ''; }
	echo "<input ".$checked." id='videojs_line' name='videojs_options[videojs_line]' type='checkbox' />";
}

function default_output() {
	$options = get_option('videojs_options');
	if(isset($options['videojs_default'])) { $checked = ' checked="checked" '; } else { $checked = ''; }
	echo "<input ".$checked." id='videojs_default' name='videojs_options[videojs_default]' type='checkbox' />";
}

function flix_output() {
	$options = get_option('videojs_options');
	if(isset($options['videojs_flix'])) { $checked = ' checked="checked" '; } else { $checked = ''; }
	echo "<input ".$checked." id='videojs_flix' name='videojs_options[videojs_flix]' type='checkbox' />";
}

function round_output() {
	$options = get_option('videojs_options');
	if(isset($options['videojs_round'])) { $checked = ' checked="checked" '; } else { $checked = ''; }
	echo "<input ".$checked." id='videojs_round' name='videojs_options[videojs_round]' type='checkbox' />";
}

function classic_output() {
	$options = get_option('videojs_options');
	if(isset($options['videojs_classic'])) { $checked = ' checked="checked" '; } else { $checked = ''; }
	echo "<input ".$checked." id='videojs_classic' name='videojs_options[videojs_classic]' type='checkbox' />";
}

function prate_output() {
	$options = get_option('videojs_options');
	if(isset($options['videojs_prate'])) { $checked = ' checked="checked" '; } else { $checked = ''; }
	echo "<input ".$checked." id='videojs_prate' name='videojs_options[videojs_prate]' type='checkbox' />";
}

function controls_ontop_output() {
	$options = get_option('videojs_options');
	if(isset($options['videojs_controls_ontop'])) { $checked = ' checked="checked" '; } else { $checked = ''; }
	echo "<input ".$checked." id='videojs_controls_ontop' name='videojs_options[videojs_controls_ontop]' type='checkbox' />";
}

function share_output() {
	$options = get_option('videojs_options');
	if(isset($options['videojs_share'])) { $checked = ' checked="checked" '; } else { $checked = ''; }
	echo "<input ".$checked." id='videojs_share' name='videojs_options[videojs_share]' type='checkbox' />";
}

function toggle_output() {
	$options = get_option('videojs_options');
	if(isset($options['videojs_toggle'])) { $checked = ' checked="checked" '; } else { $checked = ''; }
	echo "<input ".$checked." id='videojs_toggle' name='videojs_options[videojs_toggle]' type='checkbox' />";
}

function download_output() {
	$options = get_option('videojs_options');
	if(isset($options['videojs_download'])) { $checked = ' checked="checked" '; } else { $checked = ''; }
	echo "<input ".$checked." id='videojs_download' name='videojs_options[videojs_download]' type='checkbox' />";
}

function pip_output() {
	$options = get_option('videojs_options');
	if(isset($options['videojs_pip'])) { $checked = ' checked="checked" '; } else { $checked = ''; }
	echo "<input ".$checked." id='videojs_pip' name='videojs_options[videojs_pip]' type='checkbox' />";
}

function back_output() {
	$options = get_option('videojs_options');
	if(isset($options['videojs_back'])) { $checked = ' checked="checked" '; } else { $checked = ''; }
	echo "<input ".$checked." id='videojs_back' name='videojs_options[videojs_back]' type='checkbox' />";
}

function forward_output() {
	$options = get_option('videojs_options');
	if(isset($options['videojs_forward'])) { $checked = ' checked="checked" '; } else { $checked = ''; }
	echo "<input ".$checked." id='videojs_forward' name='videojs_options[videojs_forward]' type='checkbox' />";
}

function resume_output() {
	$options = get_option('videojs_options');
	if(isset($options['videojs_resume'])) { $checked = ' checked="checked" '; } else { $checked = ''; }
	echo "<input ".$checked." id='videojs_resume' name='videojs_options[videojs_resume]' type='checkbox' />";
}


function download_btn_output() {
	$options = get_option('videojs_options');
	if(isset($options['videojs_download_btn'])) { $checked = ' checked="checked" '; } else { $checked = ''; }
	echo "<input ".$checked." id='videojs_download_btn' name='videojs_options[videojs_download_btn]' type='checkbox' />";
}

function volume_output() {
	$options = get_option('videojs_options');
	if(isset($options['videojs_volume'])) { $checked = ' checked="checked" '; } else { $checked = ''; }
	echo "<input ".$checked." id='videojs_volume' name='videojs_options[videojs_volume]' type='checkbox' />";
}

function brand_on_output() {
	$options = get_option('videojs_options');
	if(isset($options['videojs_brand_on'])) { $checked = ' checked="checked" '; } else { $checked = ''; }
	echo "<input ".$checked." id='videojs_brand_on' name='videojs_options[videojs_brand_on]' type='checkbox' />";
}

function fixed_output() {
	$options = get_option('videojs_options');
	if(isset($options['videojs_fixed'])) { $checked = ' checked="checked" '; } else { $checked = ''; }
	echo "<input ".$checked." id='videojs_fixed' name='videojs_options[videojs_fixed]' type='checkbox' />";
}

function prerollon_output() {
	$options = get_option('videojs_options');
	if(isset($options['videojs_prerollon'])) { $checked = ' checked="checked" '; } else { $checked = ''; }
	echo "<input ".$checked." id='videojs_prerollon' name='videojs_options[videojs_prerollon]' type='checkbox' />";
}

function c_1_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_c_1' name='videojs_options[videojs_c_1]' size='40' type='text' value='{$options['videojs_c_1']}' data-default-color='' class='videojs-color-field' />";
}

function c_2_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_c_2' name='videojs_options[videojs_c_2]' size='40' type='text' value='{$options['videojs_c_2']}' data-default-color='' class='videojs-color-field' />";
}

function c_3_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_c_3' name='videojs_options[videojs_c_3]' size='40' type='text' value='{$options['videojs_c_3']}' data-default-color='' class='videojs-color-field' />";
}

function c_4_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_c_4' name='videojs_options[videojs_c_4]' size='40' type='text' value='{$options['videojs_c_4']}' data-default-color='' class='videojs-color-field' />";
}

function c_5_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_c_5' name='videojs_options[videojs_c_5]' size='40' type='text' value='{$options['videojs_c_5']}' data-default-color='' class='videojs-color-field' />";
}

function c_6_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_c_6' name='videojs_options[videojs_c_6]' size='40' type='text' value='{$options['videojs_c_6']}' data-default-color='' class='videojs-color-field' />";
}

function c_7_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_c_7' name='videojs_options[videojs_c_7]' size='40' type='text' value='{$options['videojs_c_7']}' data-default-color='' class='videojs-color-field' />";
}

function c_8_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_c_8' name='videojs_options[videojs_c_8]' size='40' type='text' value='{$options['videojs_c_8']}' data-default-color='' class='videojs-color-field' />";
}

function c_9_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_c_9' name='videojs_options[videojs_c_9]' size='40' type='text' value='{$options['videojs_c_9']}' data-default-color='' class='videojs-color-field' />";
}

function c_10_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_c_10' name='videojs_options[videojs_c_10]' size='40' type='text' value='{$options['videojs_c_10']}' data-default-color='' class='videojs-color-field' />";
}

function c_11_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_c_11' name='videojs_options[videojs_c_11]' size='40' type='text' value='{$options['videojs_c_11']}' data-default-color='' class='videojs-color-field' />";
}

function c_12_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_c_12' name='videojs_options[videojs_c_12]' size='40' type='text' value='{$options['videojs_c_12']}' data-default-color='' class='videojs-color-field' />";
}

function c_13_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_c_13' name='videojs_options[videojs_c_13]' size='40' type='text' value='{$options['videojs_c_13']}' data-default-color='' class='videojs-color-field' />";
}

function c_14_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_c_14' name='videojs_options[videojs_c_14]' size='40' type='text' value='{$options['videojs_c_14']}' data-default-color='' class='videojs-color-field' />";
}
function c_15_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_c_15' name='videojs_options[videojs_c_15]' size='40' type='text' value='{$options['videojs_c_15']}' data-default-color='' class='videojs-color-field' />";
}
function c_16_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_c_16' name='videojs_options[videojs_c_16]' size='40' type='text' value='{$options['videojs_c_16']}' data-default-color='' class='videojs-color-field' />";
}
function c_17_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_c_17' name='videojs_options[videojs_c_17]' size='40' type='text' value='{$options['videojs_c_17']}' data-default-color='' class='videojs-color-field' />";
}
function c_18_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_c_18' name='videojs_options[videojs_c_18]' size='40' type='text' value='{$options['videojs_c_18']}' data-default-color='' class='videojs-color-field' />";
}
function c_19_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_c_19' name='videojs_options[videojs_c_19]' size='40' type='text' value='{$options['videojs_c_19']}' data-default-color='' class='videojs-color-field' />";
}
function c_20_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_c_20' name='videojs_options[videojs_c_20]' size='40' type='text' value='{$options['videojs_c_20']}' data-default-color='' class='videojs-color-field' />";
}
function c_21_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_c_21' name='videojs_options[videojs_c_21]' size='40' type='text' value='{$options['videojs_c_21']}' data-default-color='' class='videojs-color-field' />";
}
function c_22_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_c_22' name='videojs_options[videojs_c_22]' size='40' type='text' value='{$options['videojs_c_22']}' data-default-color='' class='videojs-color-field' />";
}
function c_23_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_c_23' name='videojs_options[videojs_c_23]' size='40' type='text' value='{$options['videojs_c_23']}' data-default-color='' class='videojs-color-field' />";
}

function c_24_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_c_24' name='videojs_options[videojs_c_24]' size='40' type='text' value='{$options['videojs_c_24']}' data-default-color='' class='videojs-color-field' />";
}

function c_25_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_c_25' name='videojs_options[videojs_c_25]' size='40' type='text' value='{$options['videojs_c_25']}' data-default-color='' class='videojs-color-field' />";
}

function c_26_output() {
	$options = get_option('videojs_options');
	echo "<input id='videojs_c_26' name='videojs_options[videojs_c_26]' size='40' type='text' value='{$options['videojs_c_26']}' data-default-color='' class='videojs-color-field' />";
}


function reset_output() {
	$options = get_option('videojs_options');
	if(isset($options['videojs_reset'])) { $checked = ' checked="checked" '; } else { $checked = ''; }
	echo "<input ".$checked." id='videojs_reset' name='videojs_options[videojs_reset]' type='checkbox' />";
}
/* Set Defaults */
register_activation_hook(plugin_dir_path( __FILE__ ) . 'player.php', 'add_defaults_fn');

function add_defaults_fn() {
	$tmp = get_option('videojs_options');
   
		$arr = array("videojs_c_1"=>"","videojs_c_2"=>"","videojs_c_3"=>"","videojs_c_4"=>"","videojs_c_5"=>"","videojs_c_6"=>"","videojs_c_7"=>"","videojs_c_8"=>"","videojs_c_9"=>"",
		"videojs_c_10"=>"","videojs_c_11"=>"","videojs_c_12"=>"","videojs_c_13"=>"","videojs_c_14"=>"","videojs_c_15"=>"","videojs_c_16"=>"","videojs_c_17"=>"","videojs_c_18"=>"","videojs_c_19"=>"",
		"videojs_c_20"=>"","videojs_c_21"=>"","videojs_c_22"=>"","videojs_c_23"=>"","videojs_c_24"=>"","videojs_c_25"=>"","videojs_c_26"=>"",
		"videojs_brand"=>"","videojs_brandurl"=>"","videojs_back_time"=>"","videojs_forward_time"=>"",
		"videojs_age_wl"=>"","videojs_age_er"=>"","videojs_marker_tx1"=>"","videojs_marker_sec1"=>"",
		"videojs_marker_time"=>"","videojs_htmlads_code"=>"","videojs_vast"=>"","videojs_preroll"=>"",
		"videojs_poster"=>"","videojs_preskip"=>"","videojs_prehref"=>"",

		



		"videojs_height"=>"264","videojs_width"=>"640","videojs_default"=>"on","videojs_reset"=>"");
		update_option('videojs_options', $arr);
		update_option("videojs_db_version", "1.0");
	
}
?>