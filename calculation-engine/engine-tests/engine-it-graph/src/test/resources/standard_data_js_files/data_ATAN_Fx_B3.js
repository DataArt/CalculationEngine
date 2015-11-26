var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'ca2b7151-8644-4160-8316-05a47f2542ea', label: 'ATAN\n0.4636476090008061', color: '#f0ad4e', title: 'Name: ATAN<br>Alias: null<br>Value: 0.4636476090008061<br>Type: FUNCTION<br>Id: ca2b7151-8644-4160-8316-05a47f2542ea<br>Formula Expression: Formula String: ATAN(VALUE); Formula Values: ATAN(0.5); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@bd4dc25'},
{id: 'aa90a204-73ea-4dfa-868a-73f99100fe06', label: '*\n83.4565696201451', color: '#f0ad4e', title: 'Name: *<br>Alias: null<br>Value: 83.4565696201451<br>Type: OPERATOR<br>Id: aa90a204-73ea-4dfa-868a-73f99100fe06<br>Formula Expression: Formula String: ATAN(VALUE) * VALUE; Formula Values: ATAN(0.5) * 180.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@bd4dc25'},
{id: 'd5981fe1-8280-4737-9de0-706d0806409b', label: 'PI\n3.141592653589793', color: '#f0ad4e', title: 'Name: PI<br>Alias: null<br>Value: 3.141592653589793<br>Type: FUNCTION<br>Id: d5981fe1-8280-4737-9de0-706d0806409b<br>Formula Expression: Formula String: PI(); Formula Values: PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@bd4dc25'},
{id: '67c034a7-df7c-4272-a0cd-8e8580f00185', label: '/\n26.56505117707799', color: '#f0ad4e', title: 'Name: /<br>Alias: null<br>Value: 26.56505117707799<br>Type: OPERATOR<br>Id: 67c034a7-df7c-4272-a0cd-8e8580f00185<br>Formula Expression: Formula String: ATAN(VALUE) * VALUE / PI(); Formula Values: ATAN(0.5) * 180.0 / PI(); Formula Ptg: ; Ptgs:  Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@bd4dc25'},
{id: 'fa14d2cd-b4a6-4a09-a88d-75186f968545', label: 'VALUE\n0.5', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 0.5<br>Type: CONSTANT_VALUE<br>Id: fa14d2cd-b4a6-4a09-a88d-75186f968545<br>Formula Expression: Formula String: VALUE; Formula Values: 0.5; Formula Ptg: 0.5; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@bd4dc25'},
{id: 'cacb95dd-d91c-48c6-92e4-7151e836b26d', label: 'B3\n26.56505117707799', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 26.56505117707799<br>Type: CELL_WITH_FORMULA<br>Id: cacb95dd-d91c-48c6-92e4-7151e836b26d<br>Formula Expression: Formula String: ATAN(VALUE) * VALUE / PI(); Formula Values: ATAN(0.5) * 180.0 / PI(); Formula Ptg: 0.5 ATAN  180.0 *  PI  /; Ptgs: VALUE ATAN  VALUE *  PI  / Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@bd4dc25'},
{id: '0192d6d5-57e1-40f4-8007-326089d62fc1', label: 'VALUE\n180.0', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: 180.0<br>Type: CONSTANT_VALUE<br>Id: 0192d6d5-57e1-40f4-8007-326089d62fc1<br>Formula Expression: Formula String: VALUE; Formula Values: 180.0; Formula Ptg: 180.0; Ptgs: VALUE Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@bd4dc25'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '67c034a7-df7c-4272-a0cd-8e8580f00185', to: 'cacb95dd-d91c-48c6-92e4-7151e836b26d'},
{from: 'fa14d2cd-b4a6-4a09-a88d-75186f968545', to: 'ca2b7151-8644-4160-8316-05a47f2542ea'},
{from: 'ca2b7151-8644-4160-8316-05a47f2542ea', to: 'aa90a204-73ea-4dfa-868a-73f99100fe06'},
{from: '0192d6d5-57e1-40f4-8007-326089d62fc1', to: 'aa90a204-73ea-4dfa-868a-73f99100fe06'},
{from: 'd5981fe1-8280-4737-9de0-706d0806409b', to: '67c034a7-df7c-4272-a0cd-8e8580f00185'},
{from: 'aa90a204-73ea-4dfa-868a-73f99100fe06', to: '67c034a7-df7c-4272-a0cd-8e8580f00185'}
                            ]);