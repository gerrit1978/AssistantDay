<?php

/**
 * @file
 * Preprocess function(s) for page.tpl.php
 */

function hedgecomm_alpha_preprocess_page(&$vars) {

  // hide title from all pages
  unset($vars['title']);
  $vars['title'] = "";

	// other page.tpl.php for HR Square form
  if ($vars['node']->nid >= 9 && $vars['node']->nid <= 20) {
	  $vars['theme_hook_suggestion'] = 'page__blank';		
	}


}