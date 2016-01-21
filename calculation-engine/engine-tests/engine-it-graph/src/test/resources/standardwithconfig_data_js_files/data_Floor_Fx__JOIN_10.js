var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1984', label: 'B2\n30.0', color: '#31b0d5', title: 'Name: B2<br>Alias: null<br>Value: 30.0<br>Type: CELL_WITH_FORMULA<br>Id: 1984<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(3.0, 32.5678); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@21ea996f'},
{id: '1985', label: 'VALUE\n32.5678', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 32.5678<br>Type: CONSTANT_VALUE<br>Id: 1985<br>Formula Expression: Formula String: VALUE; Formula Values: 32.5678; Formula Ptg: 32.5678; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@21ea996f'},
{id: '1986', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: 1986<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@21ea996f'},
{id: '1987', label: 'FLOOR\n30.0', color: '#f0ad4e', title: 'Name: FLOOR<br>Alias: null<br>Value: 30.0<br>Type: FUNCTION<br>Id: 1987<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(3.0, 32.5678); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@21ea996f'},
{id: '1980', label: 'A1\n2.0', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 2.0<br>Type: CELL_WITH_FORMULA<br>Id: 1980<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(2.0, 3.7); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@21ea996f'},
{id: '1981', label: 'VALUE\n3.7', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 3.7<br>Type: CONSTANT_VALUE<br>Id: 1981<br>Formula Expression: Formula String: VALUE; Formula Values: 3.7; Formula Ptg: 3.7; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@21ea996f'},
{id: '1982', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 1982<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@21ea996f'},
{id: '1983', label: 'FLOOR\n2.0', color: '#f0ad4e', title: 'Name: FLOOR<br>Alias: null<br>Value: 2.0<br>Type: FUNCTION<br>Id: 1983<br>Formula Expression: Formula String: FLOOR(VALUE, VALUE); Formula Values: FLOOR(2.0, 3.7); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@21ea996f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1982', to: '1983'},
{from: '1986', to: '1987'},
{from: '1981', to: '1983'},
{from: '1985', to: '1987'},
{from: '1983', to: '1980'},
{from: '1987', to: '1984'}
                            ]);