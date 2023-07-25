class SurveysLocator{
    iconSurveys = 'li[title="Surveys"]';
    iconNew = 'svg[data-icon="plus-circle"][height="1em"]';
    selectSurveys='span.ant-dropdown-menu-title-content';
    textfillServeyName='#name';
    textfillFramework='#framework_id';
    selectFolderFramework='div.ant-cascader-menu-item-content';
    selectFolder2Framework='li.ant-cascader-menu-item.ant-cascader-menu-item-expand';
    selectFramework='li.ant-cascader-menu-item';
    textfillPortfolio='#portfolio_id';
    selectFolderPortfolio='li.ant-cascader-menu-item.ant-cascader-menu-item-expand';
    selectPortfolio='span.selectable';
    buttonSubmit='button.ant-btn.ant-btn-primary';
    listSurveyName='.ant-table-row.ant-table-row-level-0.row--item .ant-table-cell.col--name .flexBox >div';
    buttonEdit='.ant-btn.ant-btn-text.ant-btn-sm.ant-dropdown-trigger';
    selecteEdit='span.ant-dropdown-menu-title-content';
    confirmDelete='.ant-btn.ant-btn-default.ant-btn-dangerous';
    
}
const surveysLocator = new SurveysLocator();
export default surveysLocator;