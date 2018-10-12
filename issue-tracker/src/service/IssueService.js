class IssueService {

  constructor() {
    // this.issues = [];
    this.issues = [
      {
        id: 1,
        status: 'Open',
        owner: 'Ravan',
        created: new Date('2016-08-15'),
        effort: 5,
        completionDate: new Date('2016-08-20'),
        title: 'Error in console when clicking Add'
      },
      {
        id: 2,
        status: 'Assigned', owner: 'Eddie',
        created: new Date('2016-08-16'),
        effort: 14,
        completionDate: new Date('2016-08-30'),
        title: 'Missing bottom border on panel'
      }
    ];
  }

  save(issue) {
    issue.id = Date.now();
    this.issues.push(issue);
  }

  findAll() {
    return this.issues;
  }

  findBydId(id) {
    return this.issues.find(issue => issue.id === Number(id));
  }

  search(filter) {
    let result = this.issues;
    if (filter.status) {
      result = result.filter(issue => issue.status === filter.status);
    }
    return result;
  }

}

let issueService = new IssueService();

export default issueService;
