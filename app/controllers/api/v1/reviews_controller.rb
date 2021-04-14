module Api
    module V1
        class ReviewsController < ApplicationController
            protect_from_forgery with: :null_session
            def create
                review = orbiter.reviews.new(review_params)

                if review.save
                    render json: ReviewSerializer.new(review).serialized_json
                else
                    render json: { errors: review.errors.messages }, status: 422
                end
            end

            def destroy
                review = Review.find(params[:id])

                if review.destroy
                    head :no_content
                else
                    render json: { errors: review.errors.messages }, status: 422
                end
            end

            private

            def orbiter
                @orbiter ||= Orbiter.find(params[:orbiter_id])
            end

            def review_params
                params.require(:review).permit(:title, :description, :score, :orbiter_id)
            end
        end
    end
end