var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'dfe82d16-dd48-4f41-b400-ce8cf89cfd64', label: 'B1\n15.154262241479259', color: '#31b0d5', title: 'Name: B1<br>Value: 15.154262241479259<br>Type: CELL_WITH_FORMULA<br>Id: dfe82d16-dd48-4f41-b400-ce8cf89cfd64<br>Formula Expression: Formula String: EXP(EXP(VALUE)); Formula Values: EXP(EXP(1.0)); Formula Ptg: 1.0 EXP  EXP ; Ptgs: VALUE EXP  EXP  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ac97b84'},
{id: '46d3ce55-a715-4d32-b55b-44fe0e59a828', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 46d3ce55-a715-4d32-b55b-44fe0e59a828<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ac97b84'},
{id: 'e6e49650-729f-482a-91f6-b723b0f252bb', label: 'EXP\n15.154262241479259', color: '#f0ad4e', title: 'Name: EXP<br>Value: 15.154262241479259<br>Type: FUNCTION<br>Id: e6e49650-729f-482a-91f6-b723b0f252bb<br>Formula Expression: Formula String: EXP(EXP(VALUE)); Formula Values: EXP(EXP(1.0)); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ac97b84'},
{id: '5023a0b7-9bea-4361-867f-9a93ecd9a285', label: 'A1\n2.718281828459045', color: '#31b0d5', title: 'Name: A1<br>Value: 2.718281828459045<br>Type: CELL_WITH_FORMULA<br>Id: 5023a0b7-9bea-4361-867f-9a93ecd9a285<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(1.0); Formula Ptg: 1.0 EXP ; Ptgs: VALUE EXP  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ac97b84'},
{id: '683aec9a-9533-49f5-b08a-6d7ec678aae2', label: 'EXP\n2.718281828459045', color: '#f0ad4e', title: 'Name: EXP<br>Value: 2.718281828459045<br>Type: FUNCTION<br>Id: 683aec9a-9533-49f5-b08a-6d7ec678aae2<br>Formula Expression: Formula String: EXP(VALUE); Formula Values: EXP(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6ac97b84'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5023a0b7-9bea-4361-867f-9a93ecd9a285', to: 'e6e49650-729f-482a-91f6-b723b0f252bb'},
{from: '46d3ce55-a715-4d32-b55b-44fe0e59a828', to: '683aec9a-9533-49f5-b08a-6d7ec678aae2'},
{from: 'e6e49650-729f-482a-91f6-b723b0f252bb', to: 'dfe82d16-dd48-4f41-b400-ce8cf89cfd64'},
{from: '683aec9a-9533-49f5-b08a-6d7ec678aae2', to: '5023a0b7-9bea-4361-867f-9a93ecd9a285'}
                            ]);