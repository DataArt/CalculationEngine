var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '98fe3796-3fda-4cb5-ad84-2d357f08e836', label: '-\n1.4000000000000004', color: '#f0ad4e', title: 'Name: -<br>Alias: null<br>Value: 1.4000000000000004<br>Type: OPERATOR<br>Id: 98fe3796-3fda-4cb5-ad84-2d357f08e836<br>Formula Expression: Formula String: B3 + D1 - E1; Formula Values: 6.0 + 0.4 - 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 4 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@23348b5d'},
{id: '8a4f3816-3298-4a1a-8d50-efae1d1c6392', label: 'B3\n6.0', color: '#31b0d5', title: 'Name: B3<br>Alias: null<br>Value: 6.0<br>Type: CELL_WITH_VALUE<br>Id: 8a4f3816-3298-4a1a-8d50-efae1d1c6392<br>Formula Expression: Formula String: B3; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: B3 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@23348b5d'},
{id: '36c9aa4c-bc87-4709-bb34-77eda9050e13', label: 'E5\nTRUE', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: 36c9aa4c-bc87-4709-bb34-77eda9050e13<br>Formula Expression: Formula String: AND(C6, B3 + D1 - E1); Formula Values: AND(, 6.0 + 0.4 - 5.0); Formula Ptg: , 6.0 0.4 + 5.0 - AND ; Ptgs: C6, B3 D1 + E1 - AND  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@23348b5d'},
{id: 'd6727c13-b133-40af-9466-308429b6507c', label: 'C6\n', color: '#31b0d5', title: 'Name: C6<br>Alias: null<br>Value: <br>Type: EMPTY_CELL<br>Id: d6727c13-b133-40af-9466-308429b6507c<br>Formula Expression: Formula String: C6; Formula Values: ; Formula Ptg: ; Ptgs: C6 Index in Ptgs: 5 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@23348b5d'},
{id: 'c9bbdba3-aef4-49b2-8831-2b0877cf3f6a', label: 'AND\nTRUE', color: '#f0ad4e', title: 'Name: AND<br>Alias: null<br>Value: TRUE<br>Type: FUNCTION<br>Id: c9bbdba3-aef4-49b2-8831-2b0877cf3f6a<br>Formula Expression: Formula String: AND(C6, B3 + D1 - E1); Formula Values: AND(, 6.0 + 0.4 - 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 6 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@23348b5d'},
{id: 'bfd2e51d-d734-4302-978d-b3e62f213af8', label: 'D1\n0.4', color: '#31b0d5', title: 'Name: D1<br>Alias: null<br>Value: 0.4<br>Type: CELL_WITH_VALUE<br>Id: bfd2e51d-d734-4302-978d-b3e62f213af8<br>Formula Expression: Formula String: D1; Formula Values: 0.4; Formula Ptg: 0.4; Ptgs: D1 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@23348b5d'},
{id: '333217ee-786c-4657-ba5a-c6d149449f32', label: '+\n6.4', color: '#f0ad4e', title: 'Name: +<br>Alias: null<br>Value: 6.4<br>Type: OPERATOR<br>Id: 333217ee-786c-4657-ba5a-c6d149449f32<br>Formula Expression: Formula String: B3 + D1; Formula Values: 6.0 + 0.4; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@23348b5d'},
{id: 'd1bfd5f1-9119-417c-95e6-e185a432bcc4', label: 'E1\n5.0', color: '#31b0d5', title: 'Name: E1<br>Alias: null<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: d1bfd5f1-9119-417c-95e6-e185a432bcc4<br>Formula Expression: Formula String: E1; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: E1 Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@23348b5d'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'bfd2e51d-d734-4302-978d-b3e62f213af8', to: '333217ee-786c-4657-ba5a-c6d149449f32'},
{from: 'd1bfd5f1-9119-417c-95e6-e185a432bcc4', to: '98fe3796-3fda-4cb5-ad84-2d357f08e836'},
{from: '8a4f3816-3298-4a1a-8d50-efae1d1c6392', to: '333217ee-786c-4657-ba5a-c6d149449f32'},
{from: '333217ee-786c-4657-ba5a-c6d149449f32', to: '98fe3796-3fda-4cb5-ad84-2d357f08e836'},
{from: '98fe3796-3fda-4cb5-ad84-2d357f08e836', to: 'c9bbdba3-aef4-49b2-8831-2b0877cf3f6a'},
{from: 'c9bbdba3-aef4-49b2-8831-2b0877cf3f6a', to: '36c9aa4c-bc87-4709-bb34-77eda9050e13'},
{from: 'd6727c13-b133-40af-9466-308429b6507c', to: 'c9bbdba3-aef4-49b2-8831-2b0877cf3f6a'}
                            ]);