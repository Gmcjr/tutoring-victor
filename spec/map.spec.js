describe("Map Practice", () => {

  describe("getTitleAndYear()", () => {
    beforeEach(() => {
      sinon.spy(Array.prototype, "map");
    });
    afterEach(() => {
      Array.prototype.map.restore();
    });

    it("should return a new array of each film's title and year", () => {
      const result = getTitleAndYear(collection);
      const correct = [
        "Rear Window (1954)", 
        "Psycho (1960)", 
        "The Thing (1982)", 
        "Big Trouble in Little China (1986)",
        "Fright Night (1985)"
      ];

      expect(result).to.deep.equal(correct);
    });

    it('should use the native map method', () => {
      getTitleAndYear(collection);
      Array.prototype.map.called.should.be.true;
    });
  });

  describe("getLastSpecialFeature()", () => {
    beforeEach(() => {
      sinon.spy(Array.prototype, "map");
    });
    afterEach(() => {
      Array.prototype.map.restore();
    });

    it("should return a new array of each film's title and year", () => {
      const result = getLastSpecialFeature(collection);
      const correct = [
        "Interview - Hitchcock/Truffaut Interview Excerpts",
        "Commentary - Feature Commentary with Stephen Rebello",
        "Commentary - Feature Commentary with Star Kurt Russell and Director John Carpenter",
        "Interview - Vintage Interviews with Cast and Crew",
        "Interview - First Ever Fright Night Reunion Panel"
      ];

      expect(result).to.deep.equal(correct);
    });

    it('should use the native map method', () => {
      getLastSpecialFeature(collection);
      Array.prototype.map.called.should.be.true;
    });
  });

  describe("getMappedObjects()", () => {
    beforeEach(() => {
      sinon.spy(Array.prototype, "map");
    });
    afterEach(() => {
      Array.prototype.map.restore();
    });

    it("should return a new array of each film's title and year", () => {
      const result = getMappedObjects(collection);
      const correct = [
        {
          title: 'Rear Window',
          genre: 'Mystery',
          specialFeatures: 3
        },
        {
          title: 'Psycho',
          genre: 'Horror',
          specialFeatures: 2
        },
        {
          title: 'The Thing',
          genre: 'Horror',
          specialFeatures: 1
        },
        {
          title: 'Big Trouble in Little China',
          genre: 'Comedy',
          specialFeatures: 3
        },
        {
          title: 'Fright Night',
          genre: 'Horror',
          specialFeatures: 2
        }
      ];

      expect(result).to.deep.equal(correct);
    });

    it('should use the native map method', () => {
      getMappedObjects(collection);
      Array.prototype.map.called.should.be.true;
    });
  });

  describe("getAllFeatures()", () => {
    beforeEach(() => {
      sinon.spy(Array.prototype, "map");
    });
    afterEach(() => {
      Array.prototype.map.restore();
    });

    it("should return a new array of each film's title and year", () => {
      const result = getAllFeatures(collection);
      const correct = [
        ["Documentary", "Commentary", "Interview"],
        ["Documentary", "Commentary"],
        ["Commentary"],
        ["Commentary", "Alternate Edits", "Interview"],
        ["Documentary", "Interview"]
      ]

      expect(result).to.deep.equal(correct);
    });

    it('should use the native map method', () => {
      getAllFeatures(collection);
      Array.prototype.map.called.should.be.true;
    });
  });

  

});