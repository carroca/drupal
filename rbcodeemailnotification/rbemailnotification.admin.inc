<?php

function rbemailnotification_admin_settings() {
  $form['rb_email_notification_email_body'] = array(
    '#type' => 'textarea',
    '#title' => t('Escribe el texto que deseas enviar al usuario'),
    '#description' => t('El texto que escribas es el que se le enviara al usuario en el cuerpo'),
	'#default_value'=> variable_get('rb_email_notification_email_body',''),
  );
  return system_settings_form($form);
}