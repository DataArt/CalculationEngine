var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '851', label: 'A1\n2.718281828459045', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 2.718281828459045<br>Type: CELL_WITH_FORMULA<br>Id: 851<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4c060c8f'},
{id: '852', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 852<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4c060c8f'},
{id: '853', label: 'EXP\n2.718281828459045', color: '#f0ad4e', title: 'Name: EXP<br>Alias: null<br>Value: 2.718281828459045<br>Type: FUNCTION<br>Id: 853<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4c060c8f'},
{id: '854', label: 'B1\n15.154262241479259', color: '#31b0d5', title: 'Name: B1<br>Alias: null<br>Value: 15.154262241479259<br>Type: CELL_WITH_FORMULA<br>Id: 854<br>Formula Expression: Formula String: EXP(EXP(VALUE)); Formula Values: EXP(EXP(1.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4c060c8f'},
{id: '855', label: 'A1\n2.718281828459045', color: '#31b0d5', title: 'Name: A1<br>Alias: null<br>Value: 2.718281828459045<br>Type: CELL_WITH_FORMULA<br>Id: 855<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4c060c8f'},
{id: '856', label: 'EXP\n15.154262241479259', color: '#f0ad4e', title: 'Name: EXP<br>Alias: null<br>Value: 15.154262241479259<br>Type: FUNCTION<br>Id: 856<br>Formula Expression: Formula String: EXP(EXP(VALUE)); Formula Values: EXP(EXP(1.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4c060c8f'},
{id: '857', label: 'A2\n7.3890560989306495', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 7.3890560989306495<br>Type: CELL_WITH_FORMULA<br>Id: 857<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(2.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4c060c8f'},
{id: '858', label: 'VALUE\n2.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 2.0<br>Type: CONSTANT_VALUE<br>Id: 858<br>Formula Expression: Formula String: VALUE; Formula Values: 2.0; Formula Ptg: 2.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4c060c8f'},
{id: '859', label: 'EXP\n7.3890560989306495', color: '#f0ad4e', title: 'Name: EXP<br>Alias: null<br>Value: 7.3890560989306495<br>Type: FUNCTION<br>Id: 859<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(2.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: com.dataart.spreadsheetanalytics.engine.PoiProxyWorkbook@4c060c8f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '852', to: '853'},
{from: '855', to: '856'},
{from: '858', to: '859'},
{from: '853', to: '855'},
{from: '853', to: '851'},
{from: '856', to: '854'},
{from: '859', to: '857'}
                            ]);