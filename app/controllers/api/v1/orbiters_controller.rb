module Api
    module V1
        class OrbitersController < ApplicationController
            def index
                orbiters = Orbiter.all

                render json: OrbiterSerializer.new(orbiters, options).serialized_json
            end

            def show
                orbiter = Orbiter.find_by(slug: params[:slug])

                render json: OrbiterSerializer.new(orbiter, options).serialized_json
            end

            def create
                orbiter = Orbiter.new(orbiter_params)

                if orbiter.save
                    render json: OrbiterSerializer.new(orbiter).serialized_json
                else
                    render json: {error: orbiter.errors.messages}, status: 422
                end
            end

            def update
                orbiter = Orbiter.find_by(slug: params[:slug])

                if orbiter.update(orbiter_params)
                    render json: OrbiterSerializer.new(orbiter, options).serialized_json
                else
                    render json: {error: orbiter.errors.messages}, status: 422
                end
            end    

            def destroy
                orbiter = Orbiter.find_by(slug: params[:slug])

                if orbiter.destroy
                    head :no_content
                else
                    render json: {error: orbiter.errors.messages}, status: 422
                end
            end            

            private

            def orbiter-params
                params.require(:orbiter).permit(:name, :image_url)
            end

            def options
                @options ||= { include: %i[reviews] }
            end
        end
    end
end