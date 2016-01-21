var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '1954', label: 'A1\n2.718281828459045', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 2.718281828459045<br>Type: CELL_WITH_FORMULA<br>Id: 1954<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@78da899f'},
{id: '1955', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 1955<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@78da899f'},
{id: '1956', label: 'EXP\n2.718281828459045', color: '#f0ad4e', title: 'Name: EXP<br>Alias: null<br>Value: 2.718281828459045<br>Type: FUNCTION<br>Id: 1956<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@78da899f'},
{id: '1957', label: 'B1\n15.154262241479259', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: 15.154262241479259<br>Type: CELL_WITH_FORMULA<br>Id: 1957<br>Formula Expression: Formula String: EXP(EXP(VALUE)); Formula Values: EXP(EXP(1.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@78da899f'},
{id: '1958', label: 'A1\n2.718281828459045', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 2.718281828459045<br>Type: CELL_WITH_FORMULA<br>Id: 1958<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@78da899f'},
{id: '1959', label: 'EXP\n15.154262241479259', color: '#f0ad4e', title: 'Name: EXP<br>Alias: null<br>Value: 15.154262241479259<br>Type: FUNCTION<br>Id: 1959<br>Formula Expression: Formula String: EXP(EXP(VALUE)); Formula Values: EXP(EXP(1.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@78da899f'},
{id: '1960', label: 'A2\n7.3890560989306495', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 7.3890560989306495<br>Type: CELL_WITH_FORMULA<br>Id: 1960<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(2.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@78da899f'},
{id: '1961', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 1961<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@78da899f'},
{id: '1962', label: 'EXP\n7.3890560989306495', color: '#f0ad4e', title: 'Name: EXP<br>Alias: null<br>Value: 7.3890560989306495<br>Type: FUNCTION<br>Id: 1962<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(2.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@78da899f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '1955', to: '1956'},
{from: '1958', to: '1959'},
{from: '1961', to: '1962'},
{from: '1956', to: '1958'},
{from: '1956', to: '1954'},
{from: '1959', to: '1957'},
{from: '1962', to: '1960'}
                            ]);