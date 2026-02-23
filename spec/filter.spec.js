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
      ]
    });
    it('should use the filter method', () => {
      getTwoWordTitles(collection);
      Array.prototype.filter.called.should.be.true;
    });
  })
});