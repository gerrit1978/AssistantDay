<?php

/**
 * @file
 * Preprocess function(s) for page.tpl.php
 */

function hedgecomm_alpha_preprocess_page(&$vars) {

  // hide title from all pages
  unset($vars['title']);
  $vars['title'] = "";

}