Blockly.Python['ikb1_digital_read'] = function(block) {
  Blockly.Python.definitions_['import_iKB1'] = 'import iKB1';

  var dropdown_ch = block.getFieldValue('ch');
  
	var code = `iKB1.Pin(${dropdown_ch}, mode=iKB1.Pin.IN).value()`;
	return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['ikb1_digital_write'] = function(block) {
  Blockly.Python.definitions_['import_iKB1'] = 'import iKB1';

	var dropdown_ch = block.getFieldValue('ch');
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC) || 0;
  
	var code = `iKB1.Pin(${dropdown_ch}, mode=iKB1.Pin.OUT).value(${value_value})\n`;
	return code;
};

Blockly.Python['ikb1_analog_read'] = function(block) {
  Blockly.Python.definitions_['import_iKB1'] = 'import iKB1';

  var dropdown_ch = block.getFieldValue('ch');
  
  var code = `iKB1.ADC(${dropdown_ch}).read()`;
	return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['ikb1_motor'] = function(block) {
  Blockly.Python.definitions_['import_iKB1'] = 'import iKB1';

	var dropdown_ch = block.getFieldValue('ch');
	var dropdown_dir = block.getFieldValue('dir');
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  
	var code = `m = iKB1.Motor(${dropdown_ch}); m.dir(iKB1.Motor.${dropdown_dir}); m.speed(${value_speed}); m.update()\n`;
	return code;
};

Blockly.Python['ikb1_servo'] = function(block) {
  Blockly.Python.definitions_['import_iKB1'] = 'import iKB1';

	var dropdown_ch = block.getFieldValue('ch');
  var value_angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC) || 0;
  
	var code = `iKB1.Servo(${dropdown_ch}).angle(${value_angle})\n`;
	return code;
};

Blockly.Python['ikb1_servo2'] = function(block) {
  Blockly.Python.definitions_['import_iKB1'] = 'import iKB1';

	var dropdown_ch = block.getFieldValue('ch');
	var dropdown_dir = block.getFieldValue('dir');
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC) || 0;
  
	var code = `iKB1.Servo(${dropdown_ch}).angle(90 - ((${value_speed} / 100 * 90) * ${dropdown_dir == 1 ? -1 : 1}))\n`;
	return code;
};

Blockly.Python['ikb1_serial_config'] = function(block) {
  Blockly.Python.definitions_['import_iKB1'] = 'import iKB1';

  var dropdown_baud = block.getFieldValue('baud');
  
	var code = `ikbUART = iKB1.UART(${dropdown_baud})\n`;
	return code;
};

Blockly.Python['ikb1_serial_write'] = function(block) {
  Blockly.Python.definitions_['import_iKB1'] = 'import iKB1';

  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC) || 0;
  
	var code = `ikbUART.write((${value_data}).encode())\n`;
	return code;
};

Blockly.Python['ikb1_serial_write_line'] = function(block) {
  Blockly.Python.definitions_['import_iKB1'] = 'import iKB1';

  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC) || '';
  
	var code = `ikbUART.write((${value_data} + '\\n').encode())\n`;
	return code;
};

Blockly.Python['ikb1_serial_available'] = function(block) {
  Blockly.Python.definitions_['import_iKB1'] = 'import iKB1';

	var code = `ikbUART.available()`;
	return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['ikb1_serial_read_one_byte'] = function(block) {
  Blockly.Python.definitions_['import_iKB1'] = 'import iKB1';

	var code = `ikbUART.read()`;
	return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['ikb1_serial_read'] = function(block) {
  Blockly.Python.definitions_['import_iKB1'] = 'import iKB1';
  
  var value_count = Blockly.Python.valueToCode(block, 'count', Blockly.Python.ORDER_ATOMIC);
  
	var code = `ikbUART.read(${value_count})`;
	return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['ikb1_serial_read_string'] = function(block) {
  Blockly.Python.definitions_['import_iKB1'] = 'import iKB1';

	var code = `ikbUART.readString()`;
	return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['ikb1_serial_read_line'] = function(block) {
  Blockly.Python.definitions_['import_iKB1'] = 'import iKB1';

	var code = `ikbUART.readline()`;
	return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['ikb1_serial_read_until'] = function(block) {
  Blockly.Python.definitions_['import_iKB1'] = 'import iKB1';

	var text_until = block.getFieldValue('until');
  var code = `ikbUART.readUntil(b'${text_until}')`;
  
	return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['ikb1_motor_forward'] = function(block) {
  Blockly.Python.definitions_['import_iKB1'] = 'import iKB1';

  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC) || '0';
  
	var code = '';
  code += `m1 = iKB1.Motor(1); m1.dir(iKB1.Motor.FORWARD); m1.speed(${value_speed}); m1.update()`;
  code += '; ';
  code += `m2 = iKB1.Motor(2); m2.dir(iKB1.Motor.FORWARD); m2.speed(${value_speed}); m2.update()`;
  code += '\n';
	return code;
};

Blockly.Python['ikb1_motor_backward'] = function(block) {
  Blockly.Python.definitions_['import_iKB1'] = 'import iKB1';

  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC) || '0';
  
  var code = '';
  code += `m1 = iKB1.Motor(1); m1.dir(iKB1.Motor.BACKWARD); m1.speed(${value_speed}); m1.update()`;
  code += '; ';
  code += `m2 = iKB1.Motor(2); m2.dir(iKB1.Motor.BACKWARD); m2.speed(${value_speed}); m2.update()`;
  code += '\n';
	return code;
};

Blockly.Python['ikb1_motor_turn_left'] = function(block) {
  Blockly.Python.definitions_['import_iKB1'] = 'import iKB1';

  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC) || '0'
  
	var code = '';
  code += `m1 = iKB1.Motor(1); m1.dir(iKB1.Motor.FORWARD); m1.speed(0); m1.update()`;
  code += '; ';
  code += `m2 = iKB1.Motor(2); m2.dir(iKB1.Motor.FORWARD); m2.speed(${value_speed}); m2.update()`;
  code += '\n';
	return code;
};

Blockly.Python['ikb1_motor_turn_right'] = function(block) {
  Blockly.Python.definitions_['import_iKB1'] = 'import iKB1';

  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC) || '0';
  
	var code = '';
  code += `m1 = iKB1.Motor(1); m1.dir(iKB1.Motor.FORWARD); m1.speed(${value_speed}); m1.update()`;
  code += '; ';
  code += `m2 = iKB1.Motor(2); m2.dir(iKB1.Motor.FORWARD); m2.speed(0); m2.update()`;
  code += '\n';
	return code;
};

Blockly.Python['ikb1_motor_spin_left'] = function(block) {
  Blockly.Python.definitions_['import_iKB1'] = 'import iKB1';

  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC) || '0';
  
	var code = '';
  code += `m1 = iKB1.Motor(1); m1.dir(iKB1.Motor.BACKWARD); m1.speed(${value_speed}); m1.update()`;
  code += '; ';
  code += `m2 = iKB1.Motor(2); m2.dir(iKB1.Motor.FORWARD); m2.speed(${value_speed}); m2.update()`;
  code += '\n';
	return code;
};

Blockly.Python['ikb1_motor_spin_right'] = function(block) {
  Blockly.Python.definitions_['import_iKB1'] = 'import iKB1';

  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC) || '0';
  
	var code = '';
  code += `m1 = iKB1.Motor(1); m1.dir(iKB1.Motor.FORWARD); m1.speed(${value_speed}); m1.update()`;
  code += '; ';
  code += `m2 = iKB1.Motor(2); m2.dir(iKB1.Motor.BACKWARD); m2.speed(${value_speed}); m2.update()`;
  code += '\n';
	return code;
};

Blockly.Python['ikb1_motor_stop'] = function(block) {
  Blockly.Python.definitions_['import_iKB1'] = 'import iKB1';
  
	var code = '';
	code += `m1 = iKB1.Motor(1); m1.dir(iKB1.Motor.STOP); m1.update()`;
  code += '; ';
  code += `m2 = iKB1.Motor(2); m2.dir(iKB1.Motor.STOP); m2.update()`;
  code += '\n';
	return code;
};

Blockly.Python['ikb1_motor_forward2'] = function(block) {
  Blockly.Python.definitions_['import_iKB1'] = 'import iKB1';

	var value_speed1 = Blockly.Python.valueToCode(block, 'speed1', Blockly.Python.ORDER_ATOMIC) || '0';
  var value_speed2 = Blockly.Python.valueToCode(block, 'speed2', Blockly.Python.ORDER_ATOMIC) || '0';
  
	var code = '';
  code += `m1 = iKB1.Motor(1); m1.dir(iKB1.Motor.FORWARD); m1.speed(${value_speed1}); m1.update()`;
  code += '; ';
  code += `m2 = iKB1.Motor(2); m2.dir(iKB1.Motor.FORWARD); m2.speed(${value_speed2}); m2.update()`;
  code += '\n';
	return code;
};

Blockly.Python['ikb1_motor_backward2'] = function(block) {
  Blockly.Python.definitions_['import_iKB1'] = 'import iKB1';

	var value_speed1 = Blockly.Python.valueToCode(block, 'speed1', Blockly.Python.ORDER_ATOMIC) || '0';
  var value_speed2 = Blockly.Python.valueToCode(block, 'speed2', Blockly.Python.ORDER_ATOMIC) || '0';
  
	var code = '';
	code += `m1 = iKB1.Motor(1); m1.dir(iKB1.Motor.BACKWARD); m1.speed(${value_speed1}); m1.update()`;
  code += '; ';
  code += `m2 = iKB1.Motor(2); m2.dir(iKB1.Motor.BACKWARD); m2.speed(${value_speed2}); m2.update()`;
  code += '\n';
	return code;
};
