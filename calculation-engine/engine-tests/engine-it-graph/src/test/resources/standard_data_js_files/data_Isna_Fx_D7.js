var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '6aa11656-fb15-49ab-952e-caa8fd54c994', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 6aa11656-fb15-49ab-952e-caa8fd54c994<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5c30a9b0'},
{id: '6089ec93-bdcf-44f6-8004-e36016420c1f', label: 'D7\n5.0', color: '#31b0d5', title: 'Name: D7<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_FORMULA<br>Id: 6089ec93-bdcf-44f6-8004-e36016420c1f<br>Formula Expression: Formula String: VALUE + VALUE; Formula Values: 2.0 + 3.0; Formula Ptg: 2.0 3.0 +; Ptgs: VALUE VALUE + Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5c30a9b0'},
{id: 'afbbbc8a-dab9-40ce-9fb7-491376725e1d', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: afbbbc8a-dab9-40ce-9fb7-491376725e1d<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5c30a9b0'},
{id: 'c516c417-2e93-4919-8302-7d4ace1ad8fb', label: '+\n5.0', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 5.0<br>Type: OPERATOR<br>Id: c516c417-2e93-4919-8302-7d4ace1ad8fb<br>Formula Expression: Formula String: VALUE + VALUE; Formula Values: 2.0 + 3.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@5c30a9b0'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'c516c417-2e93-4919-8302-7d4ace1ad8fb', to: '6089ec93-bdcf-44f6-8004-e36016420c1f'},
{from: '6aa11656-fb15-49ab-952e-caa8fd54c994', to: 'c516c417-2e93-4919-8302-7d4ace1ad8fb'},
{from: 'afbbbc8a-dab9-40ce-9fb7-491376725e1d', to: 'c516c417-2e93-4919-8302-7d4ace1ad8fb'}
                            ]);