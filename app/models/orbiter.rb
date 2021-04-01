class Orbiter < ApplicationRecord
    has_many :reviews

    before_create :slugify

    def slugify
        self.slug = name.parametrize
    end

    def avg_score
        return 0 unless reviews.size.positive?

        reviews.average(:score).to_f.round(2)
    end
end
