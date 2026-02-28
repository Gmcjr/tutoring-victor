describe("Filter Practice", () => {

  describe("getTwoWordTitles()", () => {
    beforeEach(() => {
      sinon.spy(Array.prototype, "filter");
    });
    afterEach(() => {
      Array.prototype.filter.restore();
    });
    it('should return an array of the films with two word titles', () => {
      const result = getTwoWordTitles(collection);
      const correct = [
        {
          title: 'Rear Window',
          year: 1954,
          director: 'Alfred Hitchcock',
          digitalCode: null,
          genreTags: ['Mystery', 'Suspense'],
          specialFeatures: [
              {
                  type: 'Documentary',
                  title: "Rear Window Ethics: An Original Documentary",
                  length: '30 minutes'
              },
              {
                  type: 'Commentary',
                  title: 'Feature Commentary with John Fawell',
                  length: '110 minutes'
              },
              {
                  type: 'Interview',
                  title: 'Hitchcock/Truffaut Interview Excerpts',
                  length: '20 minutes'
              }
          ]
        },
        {
          title: 'The Thing',
          year: 1982,
          director: 'John Carpenter',
          digitalCode: null,
          genreTags: ['Horror', 'Science Fiction'],
          specialFeatures: [
              {
                  type: 'Commentary',
                  title: 'Feature Commentary with Star Kurt Russell and Director John Carpenter',
                  length: '109 minutes'
              },
          ]
        },
        {
          title: 'Fright Night',
          year: 1985,
          director: 'Tom Holland',
          digitalCode: null,
          genreTags: ['Horror', 'Vampire'],
          specialFeatures: [
              {
                  type: 'Documentary',
                  title: "'You're So Cool, Brewster!' Documentary",
                  length: '35 minutes'
              },
              {
                  type: 'Interview',
                  title: 'First Ever Fright Night Reunion Panel',
                  length: '60 minutes'
              }
          ]
        }
      ];
      expect(result).to.deep.equal(correct);
    });
    it('should use the filter method', () => {
      getTwoWordTitles(collection);
      Array.prototype.filter.called.should.be.true;
    });
  });

  describe("getShortSpecialFeatures()", () => {
    beforeEach(() => {
      sinon.spy(Array.prototype, "filter");
    });
    afterEach(() => {
      Array.prototype.filter.restore();
    });
    it('should return an array of films with special features shorter than 30 minutes', () => {
      const result = getShortSpecialFeatures(collection);
      const correct = [
        {
          title: 'Rear Window',
          year: 1954,
          director: 'Alfred Hitchcock',
          digitalCode: null,
          genreTags: ['Mystery', 'Suspense'],
          specialFeatures: [
              {
                  type: 'Documentary',
                  title: "Rear Window Ethics: An Original Documentary",
                  length: '30 minutes'
              },
              {
                  type: 'Commentary',
                  title: 'Feature Commentary with John Fawell',
                  length: '110 minutes'
              },
              {
                  type: 'Interview',
                  title: 'Hitchcock/Truffaut Interview Excerpts',
                  length: '20 minutes'
              }
          ]
        },
        {
          title: 'Big Trouble in Little China',
          year: 1986,
          director: 'John Carpenter',
          digitalCode: null,
          genreTags: ['Comedy', 'Fantasy'],
          specialFeatures: [
              {
                  type: 'Commentary',
                  title: 'Audio Commentary with Director John Carpenter and Actor Kurt Russell',
                  length: '110 minutes'
              },
              {
                  type: 'Alternate Edits',
                  title: 'Deleted Scenes',
                  length: '10 inutes'
              },
              {
                  type: 'Interview',
                  title: 'Vintage Interviews with Cast and Crew',
                  length: '15 minutes'
              }
          ]
        },
      ];
      expect(result).to.deep.equal(correct);
    });

    it('should use the filter method', () => {
      getShortSpecialFeatures(collection);
      Array.prototype.filter.called.should.be.true;
    });
  });

  describe('getCommentaries()', () => {
    beforeEach(() => {
      sinon.spy(Array.prototype, "filter");
    });
    afterEach(() => {
      Array.prototype.filter.restore();
    });

    it('should return a new array of films that have commentaries', () => {
      const result = getCommentaries(collection);
      const correct = [
        {
          title: 'Rear Window',
          year: 1954,
          director: 'Alfred Hitchcock',
          digitalCode: null,
          genreTags: ['Mystery', 'Suspense'],
          specialFeatures: [
              {
                  type: 'Documentary',
                  title: "Rear Window Ethics: An Original Documentary",
                  length: '30 minutes'
              },
              {
                  type: 'Commentary',
                  title: 'Feature Commentary with John Fawell',
                  length: '110 minutes'
              },
              {
                  type: 'Interview',
                  title: 'Hitchcock/Truffaut Interview Excerpts',
                  length: '20 minutes'
              }
          ]
        },
        {
          title: 'Psycho',
          year: 1960,
          director: 'Alfred Hitchcock',
          digitalCode: null,
          genreTags: ['Horror', 'Suspense'],
          specialFeatures: [
              {
                  type: 'Documentary',
                  title: 'The Making of Psycho',
                  length: '45 minutes'
              },
              {
                  type: 'Commentary',
                  title: 'Feature Commentary with Stephen Rebello',
                  length: '109 minutes'
              }
          ]
        },
        {
          title: 'The Thing',
          year: 1982,
          director: 'John Carpenter',
          digitalCode: null,
          genreTags: ['Horror', 'Science Fiction'],
          specialFeatures: [
              {
                  type: 'Commentary',
                  title: 'Feature Commentary with Star Kurt Russell and Director John Carpenter',
                  length: '109 minutes'
              },
          ]
        },
        {
          title: 'Big Trouble in Little China',
          year: 1986,
          director: 'John Carpenter',
          digitalCode: null,
          genreTags: ['Comedy', 'Fantasy'],
          specialFeatures: [
              {
                  type: 'Commentary',
                  title: 'Audio Commentary with Director John Carpenter and Actor Kurt Russell',
                  length: '110 minutes'
              },
              {
                  type: 'Alternate Edits',
                  title: 'Deleted Scenes',
                  length: '10 inutes'
              },
              {
                  type: 'Interview',
                  title: 'Vintage Interviews with Cast and Crew',
                  length: '15 minutes'
              }
          ]
        }
      ];

      expect(result).to.deep.equal(correct);
    });

    it('should use the filter method', () => {
      getCommentaries(collection);
      Array.prototype.filter.called.should.be.true;
    });

  });

  describe("getEightiesHorror()", () => {
    beforeEach(() => {
      sinon.spy(Array.prototype, "filter");
    });
    afterEach(() => {
      Array.prototype.filter.restore();
    });

    it('should return an array of the 80s horror films', () => {
      const result = getEightiesHorror(collection);
      const correct = [
        {
          title: 'The Thing',
          year: 1982,
          director: 'John Carpenter',
          digitalCode: null,
          genreTags: ['Horror', 'Science Fiction'],
          specialFeatures: [
              {
                  type: 'Commentary',
                  title: 'Feature Commentary with Star Kurt Russell and Director John Carpenter',
                  length: '109 minutes'
              },
          ]
        },
        {
          title: 'Fright Night',
          year: 1985,
          director: 'Tom Holland',
          digitalCode: null,
          genreTags: ['Horror', 'Vampire'],
          specialFeatures: [
              {
                  type: 'Documentary',
                  title: "'You're So Cool, Brewster!' Documentary",
                  length: '35 minutes'
              },
              {
                  type: 'Interview',
                  title: 'First Ever Fright Night Reunion Panel',
                  length: '60 minutes'
              }
          ]
        }
      ];

      expect(result).to.deep.equal(correct);
    });

    it('should use the filter method', () => {
      getEightiesHorror(collection);
      Array.prototype.filter.called.should.be.true;
    });

  });

});